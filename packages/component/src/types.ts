/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ComponentContainer } from './component_container';

export const enum InstantiationMode {
  LAZY, // Currently all components are LAZY in JS SDK
  EAGER
}

/**
 * Factory to create a component of type T, given a ComponentContainer.
 * ComponentContainer is the IOC container that provides PROVIDERS
 * for dependencies.
 *
 * NOTE: The container only provides PROVIDERS rather than the actual instances of dependencies.
 * It is useful for lazily loaded dependencies and optional dependencies.
 */
export type ServiceFactory<T = unknown> = (
  container: ComponentContainer,
  instanceIdentifier?: string
) => T;
