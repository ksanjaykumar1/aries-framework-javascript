/*
 * Copyright 2020 - MATTR Limited
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { DocumentLoader } from '@aries-framework/core'

/**
 * Options for canonizing a document
 */
export interface CanonizeOptions {
  /**
   * Optional custom document loader
   */
  documentLoader?: DocumentLoader
  /**
   * Optional expansion map
   */
  // eslint-disable-next-line
  expansionMap?: () => void
  /**
   * Indicates whether to skip expansion during canonization
   */
  readonly skipExpansion?: boolean
}