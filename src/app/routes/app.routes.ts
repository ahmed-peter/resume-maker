import { Template01Component } from '../components/template-01/template-01.component';


export const AppRoutesPaths = [
{ 	path: '', 
	pathMatch: 'full', 
	redirectTo: 'template-01'
},
{ 	path: 'template-01', 
	component: Template01Component
 }

]