/*
* Copyright 2014-2018 the original author or authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* global SBA */
// import compteur from './compteur';
import compteurEndpoint from './compteur-endpoint';

// tag::compteurization-ui-toplevel[]
// SBA.use({
//     install({viewRegistry}) {
//         viewRegistry.addView({
//             name: 'compteur',  //<1>
//             path: '/compteur', //<2>
//             component: compteur, //<3>
//             label: 'Compteur', //<4>
//             order: 1000, //<5>
//         });
//     }
// });
// end::compteurization-ui-toplevel[]

// tag::compteurization-ui-endpoint[]
SBA.use({
    install({viewRegistry}) {
        viewRegistry.addView({
            name: 'instances/compteur',
            parent: 'instances', // <1>
            path: 'compteur',
            component: compteurEndpoint,
            label: 'Compteur',
            order: 1000,
            isEnabled: ({instance}) => instance.hasEndpoint('compteur') // <2>
    });
    }
});
// end::compteurization-ui-endpoint[]