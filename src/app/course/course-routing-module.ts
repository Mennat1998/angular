import {RouterModule,Routes} from '@angular/router'
import{NgModule} from '@angular/core'
import { CourselistComponent } from './courselist/courselist.component'
import { CoursedetailsComponent } from './coursedetails/coursedetails.component'
import { CourseupdateComponent } from './courseupdate/courseupdate.component'
import { CourseaddComponent } from './courseadd/courseadd.component'
import { CoursedeleteComponent } from './coursedelete/coursedelete.component'
const route:Routes=[
  {path:'',component:CourselistComponent/*,children:
  [
    {path:'details/:Courseid',component:CoursedetailsComponent }
  ]*/},
  {path:'details/:courseid',component:CoursedetailsComponent },
  {path:'update/:courseid',component:CourseupdateComponent},
  {path:'add',component:CourseaddComponent},
  {path:'delete/:courseid',component:CoursedeleteComponent},
]

@NgModule({
  declarations: [
  ],
  imports: [
  RouterModule.forChild(route)],
})
export class courseRoutingModule
{

}
