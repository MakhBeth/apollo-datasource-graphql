import { DataSourceConfig } from 'apollo-datasource';
import { GraphQLRequest } from 'apollo-link';
import { DocumentNode } from 'graphql';
export declare class GraphQLDataSource<TContext = any> {
    baseURL: string;
    context: TContext;
    initialize(config: DataSourceConfig<TContext>): void;
    mutation(mutation: DocumentNode, options?: GraphQLRequest): Promise<import("apollo-link").FetchResult<Record<string, any>, Record<string, any>> | undefined>;
    query(query: DocumentNode, options?: GraphQLRequest): Promise<import("apollo-link").FetchResult<Record<string, any>, Record<string, any>> | undefined>;
    protected willSendRequest?(request: any): any;
    private composeLinks;
    private didEncounterError;
    private executeSingleOperation;
    private resolveUri;
    private onRequestLink;
    private onErrorLink;
}