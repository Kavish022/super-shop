import { NextResponse, NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, data: data || [] });
  } catch (error: any) {
    console.error('GET /api/products error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, image, price, description } = body;

    // Validate required fields
    if (!title || !image || price === undefined) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: title, image, price' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('products')
      .insert([
        {
          title,
          image,
          price,
          description,
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json({ success: true, data: data?.[0] }, { status: 201 });
  } catch (error: any) {
    console.error('POST /api/products error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}
