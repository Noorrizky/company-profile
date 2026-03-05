<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    // Tambahkan properti ini untuk mengizinkan Mass Assignment
    protected $fillable = [
        'name', 
        'email', 
        'subject', 
        'message', 
        'is_read'
    ];

    // (Opsional) Casting tipe data agar is_read selalu dibaca sebagai boolean
    protected $casts = [
        'is_read' => 'boolean',
    ];
}