<?php

class NavigationTableSeeder extends Seeder {

	public function run()
	{
		// Uncomment the below to wipe the table clean before populating
		DB::table('navigation')->delete();

		$array = array(
			array(
					'title' => 'women',
					'slug'  => 'women'
			),
			array(
					'title' => 'rookies',
					'slug'  => 'rookies'
			),
			array(
					'title' => 'backstage',
					'slug'  => 'backstage'
			),
			array(
					'title' => 'join',
					'slug'  => 'join'
			)
		);

		
		DB::table('navigation')->insert($array);
	}

}
