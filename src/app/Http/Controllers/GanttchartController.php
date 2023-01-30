<?php

namespace App\Http\Controllers;

use App\Models\Ganttchart;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class GanttchartController extends Controller
{
    public function index()
    {
        $ganttchart_model = new Ganttchart();
        $charts = $ganttchart_model->getGantt(Auth::user()->id);
        return response()->json($charts);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'max:63',],
            'start' => ['required', 'date',],
            'end' => ['required', 'date', 'after_or_equal:start',]
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors()->toArray();
            $response['errors'] = ['name' => [], 'start' => [], 'end' => [],];
            foreach ($errors as $error_key => $error) {
                $response['errors'][$error_key] = $error;
            };
            return response()->json($response, 401);
        }
        try {
            $schedule = new Ganttchart();
            $schedule->name = $request->name;
            $schedule->start = $request->start;
            $schedule->end = $request->end;
            $schedule->user_id = Auth::user()->id;
            $schedule->save();
        } catch (Exception $err) {
            return response()->json([], 401);
        };
    }
}
