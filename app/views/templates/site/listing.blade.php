@section('content')
<div id='listing'>
	<ul id='grid' class='clearfix' data-columns>
@foreach( $data as $item )
		<li>
			<a href="http://www.studiohansraj.com/setdesign/{{ $item->story->slug }}">
				<img src="{{ URL::asset( $item->story->cover_photo ) }}"/>
				<div class='valign'></div>
				<p class='vcontent'>{{ $item->story->name }}</p>
			</a>
		</li>
@endforeach
	</ul>
</div>
@stop
