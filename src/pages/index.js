import React from "react";
import theme from "theme";
import { Theme, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box background="#c3c3c3" padding="1rem 1rem 1rem 1rem">
			<Components.ReactiveBase
				padding="20px 20px 20px 20px"
				url="https://a03a1cb71321:75b6603d-9456-4a5a-af6b-a487b309eb61@appbase-demo-ansible-abxiydt-arc.searchbase.io"
				app="good-books-ds"
				enableAppbase
				searchStateHeader
				themePreset="light"
				recordAnalytics
			>
				<Components.SearchBox
					title="Filter by Search"
					componentId="searchSensor"
					dataField="name, name.search"
					fieldWeights="3,1"
					placeholder="Try Searching for &quot;Paradise Lost&quot;, &quot;Road Trip&quot;,  etc."
					highlight
					URLParams
					enablePopularSuggestions
					popularSuggestionsConfig={{
						"size": 3,
						"minChars": 2,
						"index": "good-books-ds"
					}}
					enableRecentSuggestions
					recentSuggestionsConfig={{
						"size": 3,
						"index": "good-books-ds",
						"minChars": 4
					}}
					width="100%"
					max-width="600px"
					margin="0px auto 0px auto"
				/>
				<Box display="flex" justify-content="space-between">
					<Box display="flex" flex-direction="column" min-width="300px" padding="1rem 0px 1rem 0px">
						<Components.MultiList
							componentId="authorsSensor"
							dataField="authors.keyword"
							title="Filter by Authors"
							queryFormat="or"
							showCheckbox
							showCount
							showMissing
							showSearch
							showFilter
							margin="0px 0px 1rem 0px"
							sortBy="asc"
							aggregationSize="30"
							size="30"
							react={{
								"and": ["searchSensor"]
							}}
						/>
						<Components.RangeInput
							dataField="original_publication_year"
							componentId="yearSensor"
							range={{
								"start": 1900,
								"end": 2021
							}}
							rangeLabels={{
								"start": "1900",
								"end": "2021"
							}}
							URLParams
							title="Filter by Publication Year"
						/>
					</Box>
					<Box
						width="100%"
						display="flex"
						flex-direction="column"
						align-items="center"
						justify-content="flex-start"
					>
						<Box width="100%" margin="0px auto 0px auto" padding=".5rem 1rem .5rem 1rem">
							<Components.SelectedFilters showClearAll="never" />
						</Box>
						<Components.ReactiveList
							componentId="SearchResult"
							dataField="name"
							from="0"
							size="15"
							pagination
							react={{
								"and": ["searchSensor", "authorsSensor", "yearSensor"]
							}}
							paginationAt="bottom"
							margin="0px 0px 0px 2rem"
						/>
					</Box>
				</Box>
			</Components.ReactiveBase>
		</Box>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61cd7e6c9ff3b4001e2bed8d"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});