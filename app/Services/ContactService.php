<?php

namespace App\Services;

use App\Models\Contact;

class ContactService
{
    public function storeMessage(array $data): Contact
    {
        // Sanitasi dasar mencegah injeksi script HTML/JS (XSS Protection)
        $data['name'] = strip_tags($data['name']);
        $data['subject'] = strip_tags($data['subject']);
        $data['message'] = strip_tags($data['message']);

        return Contact::create($data);
    }
}