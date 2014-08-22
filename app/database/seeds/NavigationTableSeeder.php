<?php

class NavigationTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('navigation')->delete();

		$array = array(
			array(
					'title' => 'Set Design',
					'slug'  => 'rookies'
			),
			array(
					'title' => 'About',
					'slug'  => 'About'
			),
			array(
					'title' => 'Sculpture',
					'slug'  => 'Sculpture'
			)
		);

		
		DB::table('navigation')->insert($array);
	}

}
