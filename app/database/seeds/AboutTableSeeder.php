<?php

class AboutTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('about')->delete();

		$array = array(
			array(
					'title' => '',
					'paragraph' => ""
			)
		);

		
		DB::table('about')->insert($array);
	}

}




/*
	$table->string('title');
	$table->string('slug');
	$table->string('path');
*/