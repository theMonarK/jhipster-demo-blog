import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterDemoBlogBlogModule } from './blog/blog.module';
import { JhipsterDemoBlogEntryModule } from './entry/entry.module';
import { JhipsterDemoBlogTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterDemoBlogBlogModule,
        JhipsterDemoBlogEntryModule,
        JhipsterDemoBlogTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterDemoBlogEntityModule {}
