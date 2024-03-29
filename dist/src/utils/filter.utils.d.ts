import type { LabeledFilter, UnfoldedFilter } from '../types/search-results/Filters';
import type { FacetResult, FilterGroup, FilterGroupItemTypeRange, HierarchyTree } from '@getlupa/client-sdk/Types';
export declare const formatRange: (filter: FilterGroupItemTypeRange) => string;
export declare const unfoldFilters: (filters?: FilterGroup) => UnfoldedFilter[];
export declare const getLabeledFilters: (filters: UnfoldedFilter[], facets?: FacetResult[]) => LabeledFilter[];
export declare const isFacetKey: (key: string) => boolean;
export declare const isArrayKey: (key: string) => boolean;
export declare const getMostSpecificHierarchyTerms: (terms: string[]) => string[];
export declare const recursiveFilter: (items: HierarchyTree[], query?: string) => HierarchyTree[];
export declare const recursiveFilterItem: (item: HierarchyTree, query?: string) => HierarchyTree | undefined;
export declare const rangeFilterToString: (rangeFilter: FilterGroupItemTypeRange, separator?: string) => string;
