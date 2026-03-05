<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Services\ContactService;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    public function __construct(
        protected ContactService $contactService
    ) {}

    /**
     * Menampilkan halaman formulir kontak
     */
    public function index(): Response
    {
        return Inertia::render('Contact/Index');
    }

    /**
     * Menyimpan data yang dikirim dari formulir React
     */
    public function store(StoreContactRequest $request): RedirectResponse
    {
        // Data yang masuk ke sini sudah PASTI valid karena melewati StoreContactRequest
        $this->contactService->storeMessage($request->validated());

        // Redirect kembali ke halaman kontak dengan pesan sukses (flash message)
        return redirect()->back()->with('success', 'Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.');
    }
}
