<?php

namespace App\Http\Controllers;

use App\Models\Ganttchart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GanttchartController extends Controller
{
    public function index()
    {
        $ganttchart_model = new Ganttchart();
        $charts = $ganttchart_model->getGantt(Auth::user()->id);
        return response()->json($charts);
    }
}
