<?php

class SetDesignTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('setdesign')->delete();

		$array = array(

			array(
					'slug' => 'one',
					'name' => 'Set Design One',
					'photographer' => '',
					'stylist' => '',
					'talent' => '',
					'makeup' => '',
					'hair' => '',
					'photocover_id' => null
			)
		);

		
		DB::table('setdesign')->insert($array);
	}

}


/*
    $table->string('slug');
    $table->string('name');
    $table->string('height');
    $table->string('bust');
    $table->string('waist');
    $table->string('hips');
    $table->string('shoes');
    $table->string('hair');
    $table->string('eyes');
*/