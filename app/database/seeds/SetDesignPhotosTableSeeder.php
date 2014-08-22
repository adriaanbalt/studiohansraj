<?php

class SetDesignPhotosTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('setdesign_photos')->delete();

		$array = array(
			array(
					'title' => '',
					'slug' => '',
					'path' => '',
					'setdesign_id' => '1'
			)
		);

		
		DB::table('setdesign_photos')->insert($array);
	}

}

