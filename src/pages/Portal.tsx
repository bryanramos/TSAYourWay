import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, SortBy } from 'react-instantsearch-dom';
import Hit from '../components/Hit';

const searchClient = algoliasearch('NS6BLC96ZY', '5a006da760ad38c7b6a38f7fa3900d99');

export class Portal extends React.Component {
    render() {
        return (
            <InstantSearch searchClient={searchClient} indexName="dev_TsaEvents">
                <h2>Event Catalog</h2>
                <div className="search">
                <SearchBox 
                    translations={{
                        placeholder: 'Search events by name, level, skill, etc.',
                    }}
                />
                <span>Sort By Here</span>
                </div>
                

                <Hits hitComponent={Hit} />
            </InstantSearch>
        )
    }
}