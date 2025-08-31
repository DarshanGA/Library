import { Routes } from '@angular/router';
import { AngularInfoComponent } from './angular/angular-info/angular-info.component';
import { GitInfoComponent } from './git/git-info/git-info.component';
import { ApiInfoComponent } from './api/api-info/api-info.component';
import { BootstrapInfoComponent } from './bootstrap/bootstrap-info/bootstrap-info.component';
import { DockerInfoComponent } from './docker/docker-info/docker-info.component';
import { HtmlCssInfoComponent } from './html-css/html-css-info/html-css-info.component';
import { JavaInfoComponent } from './java/java-info/java-info.component';
import { NpmInfoComponent } from './npm/npm-info/npm-info.component';
import { OthersInfoComponent } from './others/others-info/others-info.component';
import { PostgresqlInfoComponent } from './postgresql/postgresql-info/postgresql-info.component';
import { SpringbootInfoComponent } from './springboot/springboot-info/springboot-info.component';
import { TypescriptInfoComponent } from './typescript/typescript-info/typescript-info.component';

export const routes: Routes = [
    {
        path: "",
        component: AngularInfoComponent
    },
    {
        path: "git",
        component: GitInfoComponent
    },
    {
        path: "apis",
        component: ApiInfoComponent
    },
    {
        path: "bootstrap",
        component: BootstrapInfoComponent
    },
    {
        path: "docker",
        component: DockerInfoComponent
    },
    {
        path: "htmlcss",
        component: HtmlCssInfoComponent
    },
    {
        path: "java",
        component: JavaInfoComponent
    },
    {
        path: "npm",
        component: NpmInfoComponent
    },
    {
        path: "other",
        component: OthersInfoComponent
    },
    {
        path: "postgresql",
        component: PostgresqlInfoComponent
    },
    {
        path: "springboot",
        component: SpringbootInfoComponent
    },
    {
        path: "typescript",
        component: TypescriptInfoComponent
    }
];
