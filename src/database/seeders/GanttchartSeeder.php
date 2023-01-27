<?php

namespace Database\Seeders;

use App\Models\Ganttchart;
use Illuminate\Database\Seeder;

class GanttchartSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Ganttchart::factory()->count(30)->create();
    }
}
