import { ReactiveList } from "@appbaseio/reactivesearch-quarkly";
import atomize from '@quarkly/atomize';
import React from 'react';

const booksReactiveList = data => {
	return <div style={{
		display: 'flex',
		flexDirection: "column",
		width: "250px",
		padding: "1rem",
		boxShadow: "0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)",
		background: "white"
	}} key={data._id}>
		      
		<img src={data.image} alt="Book Cover" style={{
			height: "220px",
			width: "100%",
			objectFit: 'cover',
			marginBottom: ".5rem"
		}} />
		      
		<div style={{}}>
			        
			<h3 title={data.original_title} style={{
				margin: "0",
				whiteSpace: "nowrap",
				overflow: "hidden",
				textOverflow: "ellipsis"
			}} dangerouslySetInnerHTML={{
				__html: data.original_title
			}}></h3>
			        
			<div className="flex column justify-space-between">
				          
				<div>
					            
					<div>
						              by 
						<span style={{
							color: "#9d9d9d"
						}}>
							{data.authors}
						</span>
						            
					</div>
					            
					<div style={{
						padding: "10px 0"
					}}>
						              
						<span className="stars">
							                
							{Array(data.average_rating_rounded).fill('x').map((item, index) => <span>
								⭐
							</span>) // eslint-disable-line
							}
							              
						</span>
						              
						<span style={{
							marginLeft: '5px',
							color: "#6b6b6b"
						}}>
							(
							{data.average_rating}
							 avg)
						</span>
						            
					</div>
					          
				</div>
				          
				<span>
					Pub 
					{data.original_publication_year}
				</span>
				        
			</div>
			      
		</div>
		    
	</div>;
};

const ReactiveListWrapper = props => {
	return <ReactiveList {...props} render={({
		loading,
		error,
		data
	}) => {
		if (loading) {
			return <div>
				Fetching Results.
			</div>;
		}

		if (error) {
			return <div>
				Something went wrong! Error details 
				{JSON.stringify(error)}
			</div>;
		}

		return <div style={{
			display: 'flex',
			padding: "1rem",
			gap: '1rem',
			flexWrap: "wrap"
		}}>
			          
			{data.map(item => booksReactiveList(item))}
			        
		</div>;
	}} renderResultStats={function (stats) {
		return <h4 style={{
			margin: "1rem auto 0",
			width: "max-content"
		}}>
			Found  
			{stats.numberOfResults}
			  results in  
			{stats.time}
			ms
		</h4>;
	}} />;
};

export default atomize(ReactiveListWrapper)({
	title: 'ReactiveList',
	description: ReactiveList.description,
	propInfo: ReactiveList.propInfo,
	defaultProps: ReactiveList.defaultProps
});