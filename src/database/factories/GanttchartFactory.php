<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class GanttchartFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $title_num = $this->faker->numberBetween(10, 30);
        $date1 = $this->faker->dateTimeBetween("-1month", "+1month");
        $date2 = $this->faker->dateTimeBetween("-1month", "+1month");
        $start = "";
        $end = "";
        if ($date1 < $date2) {
            $start = $date1;
            $end = $date2;
        } else {
            $start = $date2;
            $end = $date1;
        }
        $last_user = User::orderBy('id', 'desc')->first();
        $user_id = $this->faker->numberBetween(1, $last_user->id);
        return [
            'name' => $this->faker->realText($title_num),
            'start' => $start,
            'end' => $end,
            'user_id' => $user_id,
        ];
    }
}
