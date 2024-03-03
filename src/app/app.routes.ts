import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:'dashboard',
        loadChildren: () => import('./../app/home/home.module').then(m => m.HomeModule)
    },
    {
        path:'claims',
        loadChildren: () => import('./../app/claims/claims.module').then(m => m.ClaimsModule)
    },
    {
        path:'readyToInvoice',
        loadChildren: () => import('./../app/invoice/invoice.module').then(m => m.InvoiceModule)
    },
    {
        path:'remittances',
        loadChildren: () => import('./../app/remittances/remittances.module').then(m => m.RemittancesModule)
    },
    {
        path:'bodyshopprofile',
        loadChildren: () => import('./../app/bodyshop/bodyshop.module').then(m => m.BodyshopModule)
    }
];
