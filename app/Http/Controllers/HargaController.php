<?php

namespace App\Http\Controllers;
use App\Harga;
use Illuminate\Http\Request;

class HargaController extends Controller
{
    public function index()
    {
        $harga = Harga::get();
        return response([
            'success' => true,
            'message' => 'List Semua harga',
            'data' => $harga
        ], 200);
    }
}
