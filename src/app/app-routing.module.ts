import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullviewComponent } from './components/fullview/fullview.component';
import { SearchResultComponent} from './components/search-result/search-result.component'
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
{path: "",component: FullviewComponent},
{path: "allEntries",component: FullviewComponent},
{path: "search",component: SearchResultComponent},
{path:"details/:album",component:DetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
