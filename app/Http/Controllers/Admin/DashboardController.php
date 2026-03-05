<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Portfolio;
use App\Models\Contact;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
class DashboardController extends Controller
{
    public function index(): Response
    {
        $stats = [
            'total_news' => News::count(),
            'published_news' => News::where('is_published', true)->count(),
            'total_portfolios' => Portfolio::count(),
            'unread_messages' => Contact::where('is_read', false)->count(),
            'total_messages' => Contact::count(),
        ];

        // Ubah take(5)->get() menjadi paginate(10)
        $messages = Contact::latest()->paginate(10);

        return Inertia::render('Dashboard', [
            'stats' => $stats,
            // Kita ubah nama variabelnya agar lebih umum karena ini sekarang berisi seluruh history
            'messages' => $messages 
        ]);
        
    }
    public function markAsRead(Contact $contact): RedirectResponse
    {
        // Jika pesan belum dibaca, ubah statusnya
        if (!$contact->is_read) {
            $contact->update(['is_read' => true]);
        }

        // Kembali ke halaman sebelumnya (Inertia akan merender ulang data secara seamless)
        return back();
    }
}