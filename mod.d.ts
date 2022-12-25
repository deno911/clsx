declare type Maybe<T> = T | null | undefined;

declare type NotNullish<T> = T & {};

declare type Arrayable<T> = T | T[];

declare type LiteralUnion<U extends T, T extends {} = string> = U | (T & {});

declare type StringLiteralUnion<S extends string> = `${S}` extends
  `${infer Str extends string}` ? Str | (string & {}) : never;

declare type BigIntOrNumber = number | bigint;

declare type Zero = 0 | 0n;

declare type ParseInt<S extends string | BigIntOrNumber> = `${S}` extends
  `${infer N extends number}` ? N : never;

/**
 * Matches the hidden `Infinity` type.
 *
 * Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/32277) if you want to have this type as a built-in in TypeScript.
 * @see {@linkcode NegativeInfinity}
 */
declare type PositiveInfinity = 1e999;

/**
 * @see {@linkcode PositiveInfinity}
 */
declare type NegativeInfinity = -1e999;

/**
 * @category Numeric
 */
declare type Finite<T extends BigIntOrNumber> = T extends
  PositiveInfinity | NegativeInfinity ? never : T;

/**
 * @category Numeric
 */
declare type Infinite<T extends BigIntOrNumber> = T extends
  PositiveInfinity | NegativeInfinity ? T : never;

/**
 * @category Numeric
 */
declare type Integer<T extends BigIntOrNumber> = `${T}` extends `${number}` ? T
  : never;

/**
 * @category Numeric
 */
declare type Float<T extends BigIntOrNumber> = T extends Integer<T> ? never : T;

/**
 * A negative (`-∞ < x < 0`) `number` that is not an integer.
 * Equivalent to `Negative<Float<T>>`.
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode Negative}
 * @see {@linkcode Float}
 *
 * @category Numeric
 */
declare type NegativeFloat<T extends BigIntOrNumber> = Negative<Float<T>>;

/**
 * A negative `number`/`bigint` (`-∞ < x < 0`)
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode NegativeInteger}
 * @see {@linkcode NonNegative}
 *
 * @category Numeric
 */
declare type Negative<T extends BigIntOrNumber> = T extends Zero ? never
  : `${T}` extends `-${string}` ? T
  : never;

/**
 * A negative (`-∞ < x < 0`) `number` that is an integer.
 * Equivalent to `Negative<Integer<T>>`.
 *
 * You can't pass a `bigint` as they are already guaranteed to be integers,
 * instead use `Negative<T>`.
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode Negative}
 * @see {@linkcode Integer}
 *
 * @category Numeric
 */
declare type NegativeInteger<T extends BigIntOrNumber> = Negative<Integer<T>>;

/**
 * A non-negative `number`/`bigint` (`0 <= x < ∞`).
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode NonNegativeInteger}
 * @see {@linkcode Negative}
 *
 * @example ```ts
 * import type {NonNegative} from 'type-fest';
 *
 * declare function setLength<T extends BigIntOrNumber>(length: NonNegative<T>): void;
 * ```
 *
 * @category Numeric
 */
declare type NonNegative<T extends BigIntOrNumber> = T extends Zero ? T
  : Negative<T> extends never ? T
  : never;

/**
 * A non-negative (`0 <= x < ∞`) `number` that is an integer.
 * Equivalent to `NonNegative<Integer<T>>`.
 *
 * You can't pass a `bigint` as they are already guaranteed to be integers,
 * instead use `NonNegative<T>`.
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode NonNegative}
 * @see {@linkcode Integer}
 * @example ```ts
 * declare function setLength<T extends BigIntOrNumber>(length: NonNegativeInteger<T>): void;
 * ```
 * @category Numeric
 */
declare type NonNegativeInteger<T extends BigIntOrNumber> = NonNegative<
  Integer<T>
>;

/**
 * Remove the `readonly` directive from all of an object's properties.
 *
 * @note This only affects the top-most level of properties.
 * @see {@linkcode DeepMutable} for a recursive version of this utility.
 */
declare type Mutable<T extends {}> = {
  -readonly [K in keyof T]: T[K];
};

/**
 * Recursively remove the `readonly` directive from all properties within an
 * object and any of its children.
 */
declare type DeepMutable<T extends {}> = {
  -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K];
};

/**
 * Recursively adds the `readonly` directive too all properties within an
 * object and any child objects it may contain as well. A recursive version
 * of the Readonly type that comes builtin with TypeScript.
 *
 * @see {@linkcode DeepMutable} if you need to remove the `readonly` directives
 */
declare type DeepReadonly<T extends {}> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

/**
 * Recursively makes all properties of an object (and any objects within it)
 * optional, adding the `?` directive. Essentially the recursive counterpart of
 * TypeScript's builtin Partial type.
 */
declare type DeepPartial<T extends {}> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

/**
 * Recursively make all of an object's properties (and any objects within it)
 * required, removing the `?` directive. Opposite of {@linkcode DeepPartial}.
 * Essentially the recursive counterpart of TypeScript's builtin Required type.
 */
declare type DeepRequired<T extends {}> = {
  [K in keyof T]-?: T[K] extends object ? DeepRequired<T[K]> : T[K];
};
