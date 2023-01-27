<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGanttchartsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ganttcharts', function (Blueprint $table) {
            $table->id();
            $table->string('name', 63);
            $table->date('start');
            $table->date('end');
            $table->string('type')->default('task');
            $table->integer('progress')->default(100);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ganttcharts');
    }
}
