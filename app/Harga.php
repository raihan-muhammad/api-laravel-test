<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Harga extends Model
{
    protected $fillable = [
        'harga_normal', 'harga_discount'
    ];
}
