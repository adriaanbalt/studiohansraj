<?php

class ContactTableSeeder extends Seeder {

	public function run()
	{
		DB::table('contact')->delete();

		$array = array(
			array(
					'name' => '',
					'position' => '',
					'telephone' => '',
					'fax' => '',
					'email' => '',
					'address' => '',
					'website' => ''
			)
		);

		DB::table('contact')->insert($array);
	}

}


/*
    $table->string('telephone');
    $table->string('fax');
    $table->string('email');
    $table->string('address');
*/