<?php

class PivotSetDesignPhotosBoardTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('setdesign_photos_board')->delete();

		$array = array(
			array(
					'photo_id' => '12',
					'setdesign_id' => '2'
			),
			array(
					'photo_id' => '13',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '14',
					'setdesign_id' => '2'
			),
			array(
					'photo_id' => '15',
					'setdesign_id' => '3'
			),
			array(
					'photo_id' => '16',
					'setdesign_id' => '3'
			),
			array(
					'photo_id' => '17',
					'setdesign_id' => '2'
			),
			array(
					'photo_id' => '18',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '19',
					'setdesign_id' => '3'
			),
			array(
					'photo_id' => '20',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '1',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '2',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '3',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '4',
					'setdesign_id' => '2'
			),
			array(
					'photo_id' => '5',
					'setdesign_id' => '3'
			),
			array(
					'photo_id' => '6',
					'setdesign_id' => '2'
			),
			array(
					'photo_id' => '7',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '8',
					'setdesign_id' => '1'
			),
			array(
					'photo_id' => '9',
					'setdesign_id' => '3'
			)
		);

		
		DB::table('setdesign_photos_board')->insert($array);
	}

}

