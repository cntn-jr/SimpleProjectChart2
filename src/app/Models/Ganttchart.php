<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Ganttchart extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'start',
        'end',
        'user_id',
    ];

    public function getGantt($user_id)
    {
        $charts = $this->select(['id', 'name', 'start', 'end', 'type', 'progress'])->where('user_id', $user_id)->get();
        return $charts;
    }
}
