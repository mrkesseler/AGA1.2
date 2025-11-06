// netlify/functions/contact.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yrpprpvmcxnwfuvhiupb.supabase.co'; 
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);

export const handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' }),
      };
    }

    const data = JSON.parse(event.body);
    const { name, email, company, service, problem } = data;

    if (!name || !email || !problem) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message: problem,
          company,
          service,
        },
      ]);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message submitted successfully!' }),
    };
  } catch (err) {
    console.error('Error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error. Try again later.' }),
    };
  }
};
