const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error('Network response was not ok');

    alert('Message sent successfully!');
    setFormData({ name: '', email: '', company: '', service: '', problem: '' });
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Failed to send message. Check console for details.');
  }
};
