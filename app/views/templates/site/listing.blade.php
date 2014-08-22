@section('content')
<div id='models'>
	<ul id='grid' class='clearfix' data-columns>
@foreach( $data as $item )
		<li>
			<a href="{{ Request::segment(1) }}/{{ $item->model->slug }}">
				<img src="{{ URL::asset( $item->cover->path ) }}"/>
				<div>
					<div class='valign'></div>
					<p class='vcontent'>{{ $item->model->name }}</p>
				</div>
			</a>
		</li>
@endforeach
	</ul>
</div>
@stop
