import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 画面側から「天気」「イベント」に加えて「場所」「日時」も受け取るように進化！
    const { weather, event, location, datetime } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'APIキーが設定されていません' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // AIへのお願い（プロンプト）に、場所と時間の情報を追加！
    // 💡 具体的な情報を与えることで、AIの回答が「安定」し「的確」になります。
    const prompt = `
      あなたはカフェ「ふわまる」の優秀なAI経営コンサルタントです。
      【現在の店舗状況】
      ・現在の日時: ${datetime}
      ・店舗の場所: ${location}
      ・今日の天気: ${weather}
      ・近隣の状況: ${event}

      この状況（時間帯、季節、場所、天気など）を総合的に分析し、マネージャーに向けて具体的な店舗へのアドバイス（注力すべきメニュー、在庫の注意点、スタッフの配置など）を、絵文字を交えて200文字程度で提案してください。出力はアドバイスの文章のみで構いません。
    `;

    const result = await model.generateContent(prompt);
    const advice = result.response.text();

    return NextResponse.json({ advice });
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'AIの分析中にエラーが発生しました。時間をおいて再試行してください。' }, { status: 500 });
  }
}