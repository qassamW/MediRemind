
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Medicine
 * 
 */
export type Medicine = $Result.DefaultSelection<Prisma.$MedicinePayload>
/**
 * Model Box
 * 
 */
export type Box = $Result.DefaultSelection<Prisma.$BoxPayload>
/**
 * Model MedicineAssignment
 * 
 */
export type MedicineAssignment = $Result.DefaultSelection<Prisma.$MedicineAssignmentPayload>
/**
 * Model AdministrationLog
 * 
 */
export type AdministrationLog = $Result.DefaultSelection<Prisma.$AdministrationLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  STAFF: 'STAFF',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DepartmentStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type DepartmentStatus = (typeof DepartmentStatus)[keyof typeof DepartmentStatus]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  FULL: 'FULL',
  MAINTENANCE: 'MAINTENANCE'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const PatientStatus: {
  ADMITTED: 'ADMITTED',
  DISCHARGED: 'DISCHARGED'
};

export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus]


export const MedicineType: {
  PILL: 'PILL',
  INJECTION: 'INJECTION',
  LIQUID: 'LIQUID',
  POWDER: 'POWDER',
  CREAM: 'CREAM',
  PATCH: 'PATCH',
  DROPS: 'DROPS',
  OTHER: 'OTHER'
};

export type MedicineType = (typeof MedicineType)[keyof typeof MedicineType]


export const BoxStatus: {
  ACTIVE: 'ACTIVE',
  RETURNED: 'RETURNED'
};

export type BoxStatus = (typeof BoxStatus)[keyof typeof BoxStatus]


export const AssignmentStatus: {
  ACTIVE: 'ACTIVE',
  COMPLETED: 'COMPLETED',
  PAUSED: 'PAUSED',
  CANCELLED: 'CANCELLED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const AdministrationStatus: {
  GIVEN: 'GIVEN',
  SKIPPED: 'SKIPPED',
  DELAYED: 'DELAYED'
};

export type AdministrationStatus = (typeof AdministrationStatus)[keyof typeof AdministrationStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DepartmentStatus = $Enums.DepartmentStatus

export const DepartmentStatus: typeof $Enums.DepartmentStatus

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type PatientStatus = $Enums.PatientStatus

export const PatientStatus: typeof $Enums.PatientStatus

export type MedicineType = $Enums.MedicineType

export const MedicineType: typeof $Enums.MedicineType

export type BoxStatus = $Enums.BoxStatus

export const BoxStatus: typeof $Enums.BoxStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type AdministrationStatus = $Enums.AdministrationStatus

export const AdministrationStatus: typeof $Enums.AdministrationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicine`: Exposes CRUD operations for the **Medicine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicines
    * const medicines = await prisma.medicine.findMany()
    * ```
    */
  get medicine(): Prisma.MedicineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.box`: Exposes CRUD operations for the **Box** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boxes
    * const boxes = await prisma.box.findMany()
    * ```
    */
  get box(): Prisma.BoxDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicineAssignment`: Exposes CRUD operations for the **MedicineAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicineAssignments
    * const medicineAssignments = await prisma.medicineAssignment.findMany()
    * ```
    */
  get medicineAssignment(): Prisma.MedicineAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrationLog`: Exposes CRUD operations for the **AdministrationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdministrationLogs
    * const administrationLogs = await prisma.administrationLog.findMany()
    * ```
    */
  get administrationLog(): Prisma.AdministrationLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Department: 'Department',
    Room: 'Room',
    Patient: 'Patient',
    Medicine: 'Medicine',
    Box: 'Box',
    MedicineAssignment: 'MedicineAssignment',
    AdministrationLog: 'AdministrationLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "department" | "room" | "patient" | "medicine" | "box" | "medicineAssignment" | "administrationLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Medicine: {
        payload: Prisma.$MedicinePayload<ExtArgs>
        fields: Prisma.MedicineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findFirst: {
            args: Prisma.MedicineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          findMany: {
            args: Prisma.MedicineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          create: {
            args: Prisma.MedicineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          createMany: {
            args: Prisma.MedicineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          delete: {
            args: Prisma.MedicineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          update: {
            args: Prisma.MedicineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          deleteMany: {
            args: Prisma.MedicineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>[]
          }
          upsert: {
            args: Prisma.MedicineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicinePayload>
          }
          aggregate: {
            args: Prisma.MedicineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicine>
          }
          groupBy: {
            args: Prisma.MedicineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineCountAggregateOutputType> | number
          }
        }
      }
      Box: {
        payload: Prisma.$BoxPayload<ExtArgs>
        fields: Prisma.BoxFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoxFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoxFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          findFirst: {
            args: Prisma.BoxFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoxFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          findMany: {
            args: Prisma.BoxFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>[]
          }
          create: {
            args: Prisma.BoxCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          createMany: {
            args: Prisma.BoxCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoxCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>[]
          }
          delete: {
            args: Prisma.BoxDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          update: {
            args: Prisma.BoxUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          deleteMany: {
            args: Prisma.BoxDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoxUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BoxUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>[]
          }
          upsert: {
            args: Prisma.BoxUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoxPayload>
          }
          aggregate: {
            args: Prisma.BoxAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBox>
          }
          groupBy: {
            args: Prisma.BoxGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoxGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoxCountArgs<ExtArgs>
            result: $Utils.Optional<BoxCountAggregateOutputType> | number
          }
        }
      }
      MedicineAssignment: {
        payload: Prisma.$MedicineAssignmentPayload<ExtArgs>
        fields: Prisma.MedicineAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicineAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicineAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>
          }
          findFirst: {
            args: Prisma.MedicineAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicineAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>
          }
          findMany: {
            args: Prisma.MedicineAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>[]
          }
          create: {
            args: Prisma.MedicineAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>
          }
          createMany: {
            args: Prisma.MedicineAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicineAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>[]
          }
          delete: {
            args: Prisma.MedicineAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>
          }
          update: {
            args: Prisma.MedicineAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.MedicineAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicineAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicineAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.MedicineAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicineAssignmentPayload>
          }
          aggregate: {
            args: Prisma.MedicineAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicineAssignment>
          }
          groupBy: {
            args: Prisma.MedicineAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicineAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicineAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<MedicineAssignmentCountAggregateOutputType> | number
          }
        }
      }
      AdministrationLog: {
        payload: Prisma.$AdministrationLogPayload<ExtArgs>
        fields: Prisma.AdministrationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministrationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministrationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>
          }
          findFirst: {
            args: Prisma.AdministrationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministrationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>
          }
          findMany: {
            args: Prisma.AdministrationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>[]
          }
          create: {
            args: Prisma.AdministrationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>
          }
          createMany: {
            args: Prisma.AdministrationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministrationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>[]
          }
          delete: {
            args: Prisma.AdministrationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>
          }
          update: {
            args: Prisma.AdministrationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>
          }
          deleteMany: {
            args: Prisma.AdministrationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministrationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministrationLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>[]
          }
          upsert: {
            args: Prisma.AdministrationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrationLogPayload>
          }
          aggregate: {
            args: Prisma.AdministrationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrationLog>
          }
          groupBy: {
            args: Prisma.AdministrationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministrationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministrationLogCountArgs<ExtArgs>
            result: $Utils.Optional<AdministrationLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    department?: DepartmentOmit
    room?: RoomOmit
    patient?: PatientOmit
    medicine?: MedicineOmit
    box?: BoxOmit
    medicineAssignment?: MedicineAssignmentOmit
    administrationLog?: AdministrationLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    administrationLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrationLogs?: boolean | UserCountOutputTypeCountAdministrationLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdministrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministrationLogWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    rooms: number
    patients: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | DepartmentCountOutputTypeCountRoomsArgs
    patients?: boolean | DepartmentCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    medicineAssignments: number
    administrationLogs: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineAssignments?: boolean | PatientCountOutputTypeCountMedicineAssignmentsArgs
    administrationLogs?: boolean | PatientCountOutputTypeCountAdministrationLogsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountMedicineAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAssignmentWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAdministrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministrationLogWhereInput
  }


  /**
   * Count Type MedicineCountOutputType
   */

  export type MedicineCountOutputType = {
    medicineAssignments: number
  }

  export type MedicineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineAssignments?: boolean | MedicineCountOutputTypeCountMedicineAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineCountOutputType
     */
    select?: MedicineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineCountOutputType without action
   */
  export type MedicineCountOutputTypeCountMedicineAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAssignmentWhereInput
  }


  /**
   * Count Type BoxCountOutputType
   */

  export type BoxCountOutputType = {
    patients: number
    medicineAssignments: number
  }

  export type BoxCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | BoxCountOutputTypeCountPatientsArgs
    medicineAssignments?: boolean | BoxCountOutputTypeCountMedicineAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * BoxCountOutputType without action
   */
  export type BoxCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoxCountOutputType
     */
    select?: BoxCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BoxCountOutputType without action
   */
  export type BoxCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * BoxCountOutputType without action
   */
  export type BoxCountOutputTypeCountMedicineAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAssignmentWhereInput
  }


  /**
   * Count Type MedicineAssignmentCountOutputType
   */

  export type MedicineAssignmentCountOutputType = {
    administrationLogs: number
  }

  export type MedicineAssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrationLogs?: boolean | MedicineAssignmentCountOutputTypeCountAdministrationLogsArgs
  }

  // Custom InputTypes
  /**
   * MedicineAssignmentCountOutputType without action
   */
  export type MedicineAssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignmentCountOutputType
     */
    select?: MedicineAssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicineAssignmentCountOutputType without action
   */
  export type MedicineAssignmentCountOutputTypeCountAdministrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministrationLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrationLogs?: boolean | User$administrationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrationLogs?: boolean | User$administrationLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      administrationLogs: Prisma.$AdministrationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrationLogs<T extends User$administrationLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$administrationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.administrationLogs
   */
  export type User$administrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    where?: AdministrationLogWhereInput
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    cursor?: AdministrationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministrationLogScalarFieldEnum | AdministrationLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    head: string | null
    status: $Enums.DepartmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    head: string | null
    status: $Enums.DepartmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    head: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    head?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    head?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    head?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt: Date
    updatedAt: Date
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    head?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rooms?: boolean | Department$roomsArgs<ExtArgs>
    patients?: boolean | Department$patientsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    head?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    head?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    head?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "head" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Department$roomsArgs<ExtArgs>
    patients?: boolean | Department$patientsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      head: string
      status: $Enums.DepartmentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Department$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Department$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends Department$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Department$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly head: FieldRef<"Department", 'String'>
    readonly status: FieldRef<"Department", 'DepartmentStatus'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.rooms
   */
  export type Department$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Department.patients
   */
  export type Department$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    roomNumber: string | null
    capacity: number | null
    status: $Enums.RoomStatus | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    roomNumber: string | null
    capacity: number | null
    status: $Enums.RoomStatus | null
    departmentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    roomNumber: number
    capacity: number
    status: number
    departmentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    roomNumber?: true
    capacity?: true
    status?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    roomNumber?: true
    capacity?: true
    status?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    roomNumber?: true
    capacity?: true
    status?: true
    departmentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    departmentId: string
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    capacity?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    capacity?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomNumber?: boolean
    capacity?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    roomNumber?: boolean
    capacity?: boolean
    status?: boolean
    departmentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomNumber" | "capacity" | "status" | "departmentId" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | DepartmentDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomNumber: string
      capacity: number
      status: $Enums.RoomStatus
      departmentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly roomNumber: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly departmentId: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    nationalId: string | null
    departmentId: string | null
    room: string | null
    status: $Enums.PatientStatus | null
    notes: string | null
    boxId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    age: number | null
    gender: $Enums.Gender | null
    nationalId: string | null
    departmentId: string | null
    room: string | null
    status: $Enums.PatientStatus | null
    notes: string | null
    boxId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    age: number
    gender: number
    nationalId: number
    departmentId: number
    room: number
    allergies: number
    status: number
    notes: number
    boxId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    age?: true
  }

  export type PatientSumAggregateInputType = {
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    nationalId?: true
    departmentId?: true
    room?: true
    status?: true
    notes?: true
    boxId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    nationalId?: true
    departmentId?: true
    room?: true
    status?: true
    notes?: true
    boxId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    gender?: true
    nationalId?: true
    departmentId?: true
    room?: true
    allergies?: true
    status?: true
    notes?: true
    boxId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId: string | null
    room: string | null
    allergies: string[]
    status: $Enums.PatientStatus
    notes: string | null
    boxId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    nationalId?: boolean
    departmentId?: boolean
    room?: boolean
    allergies?: boolean
    status?: boolean
    notes?: boolean
    boxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Patient$departmentArgs<ExtArgs>
    box?: boolean | Patient$boxArgs<ExtArgs>
    medicineAssignments?: boolean | Patient$medicineAssignmentsArgs<ExtArgs>
    administrationLogs?: boolean | Patient$administrationLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    nationalId?: boolean
    departmentId?: boolean
    room?: boolean
    allergies?: boolean
    status?: boolean
    notes?: boolean
    boxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Patient$departmentArgs<ExtArgs>
    box?: boolean | Patient$boxArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    nationalId?: boolean
    departmentId?: boolean
    room?: boolean
    allergies?: boolean
    status?: boolean
    notes?: boolean
    boxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Patient$departmentArgs<ExtArgs>
    box?: boolean | Patient$boxArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    gender?: boolean
    nationalId?: boolean
    departmentId?: boolean
    room?: boolean
    allergies?: boolean
    status?: boolean
    notes?: boolean
    boxId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "gender" | "nationalId" | "departmentId" | "room" | "allergies" | "status" | "notes" | "boxId" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Patient$departmentArgs<ExtArgs>
    box?: boolean | Patient$boxArgs<ExtArgs>
    medicineAssignments?: boolean | Patient$medicineAssignmentsArgs<ExtArgs>
    administrationLogs?: boolean | Patient$administrationLogsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Patient$departmentArgs<ExtArgs>
    box?: boolean | Patient$boxArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Patient$departmentArgs<ExtArgs>
    box?: boolean | Patient$boxArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      box: Prisma.$BoxPayload<ExtArgs> | null
      medicineAssignments: Prisma.$MedicineAssignmentPayload<ExtArgs>[]
      administrationLogs: Prisma.$AdministrationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      age: number
      gender: $Enums.Gender
      nationalId: string
      departmentId: string | null
      room: string | null
      allergies: string[]
      status: $Enums.PatientStatus
      notes: string | null
      boxId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends Patient$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Patient$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    box<T extends Patient$boxArgs<ExtArgs> = {}>(args?: Subset<T, Patient$boxArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    medicineAssignments<T extends Patient$medicineAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$medicineAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    administrationLogs<T extends Patient$administrationLogsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$administrationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly gender: FieldRef<"Patient", 'Gender'>
    readonly nationalId: FieldRef<"Patient", 'String'>
    readonly departmentId: FieldRef<"Patient", 'String'>
    readonly room: FieldRef<"Patient", 'String'>
    readonly allergies: FieldRef<"Patient", 'String[]'>
    readonly status: FieldRef<"Patient", 'PatientStatus'>
    readonly notes: FieldRef<"Patient", 'String'>
    readonly boxId: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.department
   */
  export type Patient$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Patient.box
   */
  export type Patient$boxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    where?: BoxWhereInput
  }

  /**
   * Patient.medicineAssignments
   */
  export type Patient$medicineAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    where?: MedicineAssignmentWhereInput
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    cursor?: MedicineAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineAssignmentScalarFieldEnum | MedicineAssignmentScalarFieldEnum[]
  }

  /**
   * Patient.administrationLogs
   */
  export type Patient$administrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    where?: AdministrationLogWhereInput
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    cursor?: AdministrationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministrationLogScalarFieldEnum | AdministrationLogScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Medicine
   */

  export type AggregateMedicine = {
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  export type MedicineMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MedicineType | null
    administrationMethod: string | null
    defaultDosage: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.MedicineType | null
    administrationMethod: string | null
    defaultDosage: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineCountAggregateOutputType = {
    id: number
    name: number
    type: number
    administrationMethod: number
    defaultDosage: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    administrationMethod?: true
    defaultDosage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    administrationMethod?: true
    defaultDosage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    administrationMethod?: true
    defaultDosage?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicine to aggregate.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicines
    **/
    _count?: true | MedicineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineMaxAggregateInputType
  }

  export type GetMedicineAggregateType<T extends MedicineAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicine[P]>
      : GetScalarType<T[P], AggregateMedicine[P]>
  }




  export type MedicineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineWhereInput
    orderBy?: MedicineOrderByWithAggregationInput | MedicineOrderByWithAggregationInput[]
    by: MedicineScalarFieldEnum[] | MedicineScalarFieldEnum
    having?: MedicineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineCountAggregateInputType | true
    _min?: MedicineMinAggregateInputType
    _max?: MedicineMaxAggregateInputType
  }

  export type MedicineGroupByOutputType = {
    id: string
    name: string
    type: $Enums.MedicineType
    administrationMethod: string | null
    defaultDosage: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicineCountAggregateOutputType | null
    _min: MedicineMinAggregateOutputType | null
    _max: MedicineMaxAggregateOutputType | null
  }

  type GetMedicineGroupByPayload<T extends MedicineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineGroupByOutputType[P]>
        }
      >
    >


  export type MedicineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    administrationMethod?: boolean
    defaultDosage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medicineAssignments?: boolean | Medicine$medicineAssignmentsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    administrationMethod?: boolean
    defaultDosage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    administrationMethod?: boolean
    defaultDosage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["medicine"]>

  export type MedicineSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    administrationMethod?: boolean
    defaultDosage?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "administrationMethod" | "defaultDosage" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["medicine"]>
  export type MedicineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicineAssignments?: boolean | Medicine$medicineAssignmentsArgs<ExtArgs>
    _count?: boolean | MedicineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicine"
    objects: {
      medicineAssignments: Prisma.$MedicineAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.MedicineType
      administrationMethod: string | null
      defaultDosage: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicine"]>
    composites: {}
  }

  type MedicineGetPayload<S extends boolean | null | undefined | MedicineDefaultArgs> = $Result.GetResult<Prisma.$MedicinePayload, S>

  type MedicineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineCountAggregateInputType | true
    }

  export interface MedicineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicine'], meta: { name: 'Medicine' } }
    /**
     * Find zero or one Medicine that matches the filter.
     * @param {MedicineFindUniqueArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineFindUniqueArgs>(args: SelectSubset<T, MedicineFindUniqueArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineFindUniqueOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineFindFirstArgs>(args?: SelectSubset<T, MedicineFindFirstArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindFirstOrThrowArgs} args - Arguments to find a Medicine
     * @example
     * // Get one Medicine
     * const medicine = await prisma.medicine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicines
     * const medicines = await prisma.medicine.findMany()
     * 
     * // Get first 10 Medicines
     * const medicines = await prisma.medicine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineWithIdOnly = await prisma.medicine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineFindManyArgs>(args?: SelectSubset<T, MedicineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicine.
     * @param {MedicineCreateArgs} args - Arguments to create a Medicine.
     * @example
     * // Create one Medicine
     * const Medicine = await prisma.medicine.create({
     *   data: {
     *     // ... data to create a Medicine
     *   }
     * })
     * 
     */
    create<T extends MedicineCreateArgs>(args: SelectSubset<T, MedicineCreateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicines.
     * @param {MedicineCreateManyArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineCreateManyArgs>(args?: SelectSubset<T, MedicineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicines and returns the data saved in the database.
     * @param {MedicineCreateManyAndReturnArgs} args - Arguments to create many Medicines.
     * @example
     * // Create many Medicines
     * const medicine = await prisma.medicine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicine.
     * @param {MedicineDeleteArgs} args - Arguments to delete one Medicine.
     * @example
     * // Delete one Medicine
     * const Medicine = await prisma.medicine.delete({
     *   where: {
     *     // ... filter to delete one Medicine
     *   }
     * })
     * 
     */
    delete<T extends MedicineDeleteArgs>(args: SelectSubset<T, MedicineDeleteArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicine.
     * @param {MedicineUpdateArgs} args - Arguments to update one Medicine.
     * @example
     * // Update one Medicine
     * const medicine = await prisma.medicine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineUpdateArgs>(args: SelectSubset<T, MedicineUpdateArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicines.
     * @param {MedicineDeleteManyArgs} args - Arguments to filter Medicines to delete.
     * @example
     * // Delete a few Medicines
     * const { count } = await prisma.medicine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineDeleteManyArgs>(args?: SelectSubset<T, MedicineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineUpdateManyArgs>(args: SelectSubset<T, MedicineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicines and returns the data updated in the database.
     * @param {MedicineUpdateManyAndReturnArgs} args - Arguments to update many Medicines.
     * @example
     * // Update many Medicines
     * const medicine = await prisma.medicine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicines and only return the `id`
     * const medicineWithIdOnly = await prisma.medicine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicine.
     * @param {MedicineUpsertArgs} args - Arguments to update or create a Medicine.
     * @example
     * // Update or create a Medicine
     * const medicine = await prisma.medicine.upsert({
     *   create: {
     *     // ... data to create a Medicine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicine we want to update
     *   }
     * })
     */
    upsert<T extends MedicineUpsertArgs>(args: SelectSubset<T, MedicineUpsertArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineCountArgs} args - Arguments to filter Medicines to count.
     * @example
     * // Count the number of Medicines
     * const count = await prisma.medicine.count({
     *   where: {
     *     // ... the filter for the Medicines we want to count
     *   }
     * })
    **/
    count<T extends MedicineCountArgs>(
      args?: Subset<T, MedicineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAggregateArgs>(args: Subset<T, MedicineAggregateArgs>): Prisma.PrismaPromise<GetMedicineAggregateType<T>>

    /**
     * Group by Medicine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineGroupByArgs['orderBy'] }
        : { orderBy?: MedicineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicine model
   */
  readonly fields: MedicineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicineAssignments<T extends Medicine$medicineAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Medicine$medicineAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicine model
   */
  interface MedicineFieldRefs {
    readonly id: FieldRef<"Medicine", 'String'>
    readonly name: FieldRef<"Medicine", 'String'>
    readonly type: FieldRef<"Medicine", 'MedicineType'>
    readonly administrationMethod: FieldRef<"Medicine", 'String'>
    readonly defaultDosage: FieldRef<"Medicine", 'String'>
    readonly notes: FieldRef<"Medicine", 'String'>
    readonly createdAt: FieldRef<"Medicine", 'DateTime'>
    readonly updatedAt: FieldRef<"Medicine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Medicine findUnique
   */
  export type MedicineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findUniqueOrThrow
   */
  export type MedicineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine findFirst
   */
  export type MedicineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findFirstOrThrow
   */
  export type MedicineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicine to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine findMany
   */
  export type MedicineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter, which Medicines to fetch.
     */
    where?: MedicineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicines to fetch.
     */
    orderBy?: MedicineOrderByWithRelationInput | MedicineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicines.
     */
    cursor?: MedicineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicines.
     */
    distinct?: MedicineScalarFieldEnum | MedicineScalarFieldEnum[]
  }

  /**
   * Medicine create
   */
  export type MedicineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicine.
     */
    data: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
  }

  /**
   * Medicine createMany
   */
  export type MedicineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine createManyAndReturn
   */
  export type MedicineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to create many Medicines.
     */
    data: MedicineCreateManyInput | MedicineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicine update
   */
  export type MedicineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicine.
     */
    data: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
    /**
     * Choose, which Medicine to update.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine updateMany
   */
  export type MedicineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine updateManyAndReturn
   */
  export type MedicineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * The data used to update Medicines.
     */
    data: XOR<MedicineUpdateManyMutationInput, MedicineUncheckedUpdateManyInput>
    /**
     * Filter which Medicines to update
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to update.
     */
    limit?: number
  }

  /**
   * Medicine upsert
   */
  export type MedicineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicine to update in case it exists.
     */
    where: MedicineWhereUniqueInput
    /**
     * In case the Medicine found by the `where` argument doesn't exist, create a new Medicine with this data.
     */
    create: XOR<MedicineCreateInput, MedicineUncheckedCreateInput>
    /**
     * In case the Medicine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineUpdateInput, MedicineUncheckedUpdateInput>
  }

  /**
   * Medicine delete
   */
  export type MedicineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
    /**
     * Filter which Medicine to delete.
     */
    where: MedicineWhereUniqueInput
  }

  /**
   * Medicine deleteMany
   */
  export type MedicineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicines to delete
     */
    where?: MedicineWhereInput
    /**
     * Limit how many Medicines to delete.
     */
    limit?: number
  }

  /**
   * Medicine.medicineAssignments
   */
  export type Medicine$medicineAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    where?: MedicineAssignmentWhereInput
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    cursor?: MedicineAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineAssignmentScalarFieldEnum | MedicineAssignmentScalarFieldEnum[]
  }

  /**
   * Medicine without action
   */
  export type MedicineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicine
     */
    select?: MedicineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicine
     */
    omit?: MedicineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineInclude<ExtArgs> | null
  }


  /**
   * Model Box
   */

  export type AggregateBox = {
    _count: BoxCountAggregateOutputType | null
    _min: BoxMinAggregateOutputType | null
    _max: BoxMaxAggregateOutputType | null
  }

  export type BoxMinAggregateOutputType = {
    id: string | null
    boxLabel: string | null
    location: string | null
    status: $Enums.BoxStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoxMaxAggregateOutputType = {
    id: string | null
    boxLabel: string | null
    location: string | null
    status: $Enums.BoxStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BoxCountAggregateOutputType = {
    id: number
    boxLabel: number
    location: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BoxMinAggregateInputType = {
    id?: true
    boxLabel?: true
    location?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoxMaxAggregateInputType = {
    id?: true
    boxLabel?: true
    location?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BoxCountAggregateInputType = {
    id?: true
    boxLabel?: true
    location?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BoxAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Box to aggregate.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boxes
    **/
    _count?: true | BoxCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoxMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoxMaxAggregateInputType
  }

  export type GetBoxAggregateType<T extends BoxAggregateArgs> = {
        [P in keyof T & keyof AggregateBox]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBox[P]>
      : GetScalarType<T[P], AggregateBox[P]>
  }




  export type BoxGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoxWhereInput
    orderBy?: BoxOrderByWithAggregationInput | BoxOrderByWithAggregationInput[]
    by: BoxScalarFieldEnum[] | BoxScalarFieldEnum
    having?: BoxScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoxCountAggregateInputType | true
    _min?: BoxMinAggregateInputType
    _max?: BoxMaxAggregateInputType
  }

  export type BoxGroupByOutputType = {
    id: string
    boxLabel: string
    location: string | null
    status: $Enums.BoxStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BoxCountAggregateOutputType | null
    _min: BoxMinAggregateOutputType | null
    _max: BoxMaxAggregateOutputType | null
  }

  type GetBoxGroupByPayload<T extends BoxGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoxGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoxGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoxGroupByOutputType[P]>
            : GetScalarType<T[P], BoxGroupByOutputType[P]>
        }
      >
    >


  export type BoxSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boxLabel?: boolean
    location?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patients?: boolean | Box$patientsArgs<ExtArgs>
    medicineAssignments?: boolean | Box$medicineAssignmentsArgs<ExtArgs>
    _count?: boolean | BoxCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["box"]>

  export type BoxSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boxLabel?: boolean
    location?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["box"]>

  export type BoxSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    boxLabel?: boolean
    location?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["box"]>

  export type BoxSelectScalar = {
    id?: boolean
    boxLabel?: boolean
    location?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BoxOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "boxLabel" | "location" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["box"]>
  export type BoxInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | Box$patientsArgs<ExtArgs>
    medicineAssignments?: boolean | Box$medicineAssignmentsArgs<ExtArgs>
    _count?: boolean | BoxCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BoxIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BoxIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BoxPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Box"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
      medicineAssignments: Prisma.$MedicineAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      boxLabel: string
      location: string | null
      status: $Enums.BoxStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["box"]>
    composites: {}
  }

  type BoxGetPayload<S extends boolean | null | undefined | BoxDefaultArgs> = $Result.GetResult<Prisma.$BoxPayload, S>

  type BoxCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoxFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoxCountAggregateInputType | true
    }

  export interface BoxDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Box'], meta: { name: 'Box' } }
    /**
     * Find zero or one Box that matches the filter.
     * @param {BoxFindUniqueArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoxFindUniqueArgs>(args: SelectSubset<T, BoxFindUniqueArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Box that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoxFindUniqueOrThrowArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoxFindUniqueOrThrowArgs>(args: SelectSubset<T, BoxFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Box that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindFirstArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoxFindFirstArgs>(args?: SelectSubset<T, BoxFindFirstArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Box that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindFirstOrThrowArgs} args - Arguments to find a Box
     * @example
     * // Get one Box
     * const box = await prisma.box.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoxFindFirstOrThrowArgs>(args?: SelectSubset<T, BoxFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Boxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boxes
     * const boxes = await prisma.box.findMany()
     * 
     * // Get first 10 Boxes
     * const boxes = await prisma.box.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boxWithIdOnly = await prisma.box.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoxFindManyArgs>(args?: SelectSubset<T, BoxFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Box.
     * @param {BoxCreateArgs} args - Arguments to create a Box.
     * @example
     * // Create one Box
     * const Box = await prisma.box.create({
     *   data: {
     *     // ... data to create a Box
     *   }
     * })
     * 
     */
    create<T extends BoxCreateArgs>(args: SelectSubset<T, BoxCreateArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Boxes.
     * @param {BoxCreateManyArgs} args - Arguments to create many Boxes.
     * @example
     * // Create many Boxes
     * const box = await prisma.box.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoxCreateManyArgs>(args?: SelectSubset<T, BoxCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Boxes and returns the data saved in the database.
     * @param {BoxCreateManyAndReturnArgs} args - Arguments to create many Boxes.
     * @example
     * // Create many Boxes
     * const box = await prisma.box.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Boxes and only return the `id`
     * const boxWithIdOnly = await prisma.box.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoxCreateManyAndReturnArgs>(args?: SelectSubset<T, BoxCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Box.
     * @param {BoxDeleteArgs} args - Arguments to delete one Box.
     * @example
     * // Delete one Box
     * const Box = await prisma.box.delete({
     *   where: {
     *     // ... filter to delete one Box
     *   }
     * })
     * 
     */
    delete<T extends BoxDeleteArgs>(args: SelectSubset<T, BoxDeleteArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Box.
     * @param {BoxUpdateArgs} args - Arguments to update one Box.
     * @example
     * // Update one Box
     * const box = await prisma.box.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoxUpdateArgs>(args: SelectSubset<T, BoxUpdateArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Boxes.
     * @param {BoxDeleteManyArgs} args - Arguments to filter Boxes to delete.
     * @example
     * // Delete a few Boxes
     * const { count } = await prisma.box.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoxDeleteManyArgs>(args?: SelectSubset<T, BoxDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boxes
     * const box = await prisma.box.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoxUpdateManyArgs>(args: SelectSubset<T, BoxUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boxes and returns the data updated in the database.
     * @param {BoxUpdateManyAndReturnArgs} args - Arguments to update many Boxes.
     * @example
     * // Update many Boxes
     * const box = await prisma.box.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Boxes and only return the `id`
     * const boxWithIdOnly = await prisma.box.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BoxUpdateManyAndReturnArgs>(args: SelectSubset<T, BoxUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Box.
     * @param {BoxUpsertArgs} args - Arguments to update or create a Box.
     * @example
     * // Update or create a Box
     * const box = await prisma.box.upsert({
     *   create: {
     *     // ... data to create a Box
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Box we want to update
     *   }
     * })
     */
    upsert<T extends BoxUpsertArgs>(args: SelectSubset<T, BoxUpsertArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxCountArgs} args - Arguments to filter Boxes to count.
     * @example
     * // Count the number of Boxes
     * const count = await prisma.box.count({
     *   where: {
     *     // ... the filter for the Boxes we want to count
     *   }
     * })
    **/
    count<T extends BoxCountArgs>(
      args?: Subset<T, BoxCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoxCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Box.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BoxAggregateArgs>(args: Subset<T, BoxAggregateArgs>): Prisma.PrismaPromise<GetBoxAggregateType<T>>

    /**
     * Group by Box.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoxGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BoxGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoxGroupByArgs['orderBy'] }
        : { orderBy?: BoxGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BoxGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoxGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Box model
   */
  readonly fields: BoxFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Box.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoxClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends Box$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Box$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    medicineAssignments<T extends Box$medicineAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Box$medicineAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Box model
   */
  interface BoxFieldRefs {
    readonly id: FieldRef<"Box", 'String'>
    readonly boxLabel: FieldRef<"Box", 'String'>
    readonly location: FieldRef<"Box", 'String'>
    readonly status: FieldRef<"Box", 'BoxStatus'>
    readonly notes: FieldRef<"Box", 'String'>
    readonly createdAt: FieldRef<"Box", 'DateTime'>
    readonly updatedAt: FieldRef<"Box", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Box findUnique
   */
  export type BoxFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box findUniqueOrThrow
   */
  export type BoxFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box findFirst
   */
  export type BoxFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boxes.
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     */
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Box findFirstOrThrow
   */
  export type BoxFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Box to fetch.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boxes.
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     */
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Box findMany
   */
  export type BoxFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter, which Boxes to fetch.
     */
    where?: BoxWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boxes to fetch.
     */
    orderBy?: BoxOrderByWithRelationInput | BoxOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boxes.
     */
    cursor?: BoxWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boxes.
     */
    distinct?: BoxScalarFieldEnum | BoxScalarFieldEnum[]
  }

  /**
   * Box create
   */
  export type BoxCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * The data needed to create a Box.
     */
    data: XOR<BoxCreateInput, BoxUncheckedCreateInput>
  }

  /**
   * Box createMany
   */
  export type BoxCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Boxes.
     */
    data: BoxCreateManyInput | BoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Box createManyAndReturn
   */
  export type BoxCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * The data used to create many Boxes.
     */
    data: BoxCreateManyInput | BoxCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Box update
   */
  export type BoxUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * The data needed to update a Box.
     */
    data: XOR<BoxUpdateInput, BoxUncheckedUpdateInput>
    /**
     * Choose, which Box to update.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box updateMany
   */
  export type BoxUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Boxes.
     */
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyInput>
    /**
     * Filter which Boxes to update
     */
    where?: BoxWhereInput
    /**
     * Limit how many Boxes to update.
     */
    limit?: number
  }

  /**
   * Box updateManyAndReturn
   */
  export type BoxUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * The data used to update Boxes.
     */
    data: XOR<BoxUpdateManyMutationInput, BoxUncheckedUpdateManyInput>
    /**
     * Filter which Boxes to update
     */
    where?: BoxWhereInput
    /**
     * Limit how many Boxes to update.
     */
    limit?: number
  }

  /**
   * Box upsert
   */
  export type BoxUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * The filter to search for the Box to update in case it exists.
     */
    where: BoxWhereUniqueInput
    /**
     * In case the Box found by the `where` argument doesn't exist, create a new Box with this data.
     */
    create: XOR<BoxCreateInput, BoxUncheckedCreateInput>
    /**
     * In case the Box was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoxUpdateInput, BoxUncheckedUpdateInput>
  }

  /**
   * Box delete
   */
  export type BoxDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    /**
     * Filter which Box to delete.
     */
    where: BoxWhereUniqueInput
  }

  /**
   * Box deleteMany
   */
  export type BoxDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Boxes to delete
     */
    where?: BoxWhereInput
    /**
     * Limit how many Boxes to delete.
     */
    limit?: number
  }

  /**
   * Box.patients
   */
  export type Box$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Box.medicineAssignments
   */
  export type Box$medicineAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    where?: MedicineAssignmentWhereInput
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    cursor?: MedicineAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicineAssignmentScalarFieldEnum | MedicineAssignmentScalarFieldEnum[]
  }

  /**
   * Box without action
   */
  export type BoxDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
  }


  /**
   * Model MedicineAssignment
   */

  export type AggregateMedicineAssignment = {
    _count: MedicineAssignmentCountAggregateOutputType | null
    _avg: MedicineAssignmentAvgAggregateOutputType | null
    _sum: MedicineAssignmentSumAggregateOutputType | null
    _min: MedicineAssignmentMinAggregateOutputType | null
    _max: MedicineAssignmentMaxAggregateOutputType | null
  }

  export type MedicineAssignmentAvgAggregateOutputType = {
    durationDays: number | null
  }

  export type MedicineAssignmentSumAggregateOutputType = {
    durationDays: number | null
  }

  export type MedicineAssignmentMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    boxId: string | null
    medicineId: string | null
    dosage: string | null
    administrationMethodOverride: string | null
    startDate: Date | null
    durationDays: number | null
    endDate: Date | null
    repeat: boolean | null
    status: $Enums.AssignmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineAssignmentMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    boxId: string | null
    medicineId: string | null
    dosage: string | null
    administrationMethodOverride: string | null
    startDate: Date | null
    durationDays: number | null
    endDate: Date | null
    repeat: boolean | null
    status: $Enums.AssignmentStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicineAssignmentCountAggregateOutputType = {
    id: number
    patientId: number
    boxId: number
    medicineId: number
    dosage: number
    administrationMethodOverride: number
    scheduleTimes: number
    startDate: number
    durationDays: number
    endDate: number
    repeat: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicineAssignmentAvgAggregateInputType = {
    durationDays?: true
  }

  export type MedicineAssignmentSumAggregateInputType = {
    durationDays?: true
  }

  export type MedicineAssignmentMinAggregateInputType = {
    id?: true
    patientId?: true
    boxId?: true
    medicineId?: true
    dosage?: true
    administrationMethodOverride?: true
    startDate?: true
    durationDays?: true
    endDate?: true
    repeat?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineAssignmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    boxId?: true
    medicineId?: true
    dosage?: true
    administrationMethodOverride?: true
    startDate?: true
    durationDays?: true
    endDate?: true
    repeat?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicineAssignmentCountAggregateInputType = {
    id?: true
    patientId?: true
    boxId?: true
    medicineId?: true
    dosage?: true
    administrationMethodOverride?: true
    scheduleTimes?: true
    startDate?: true
    durationDays?: true
    endDate?: true
    repeat?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicineAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineAssignment to aggregate.
     */
    where?: MedicineAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAssignments to fetch.
     */
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicineAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicineAssignments
    **/
    _count?: true | MedicineAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicineAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicineAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicineAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicineAssignmentMaxAggregateInputType
  }

  export type GetMedicineAssignmentAggregateType<T extends MedicineAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicineAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicineAssignment[P]>
      : GetScalarType<T[P], AggregateMedicineAssignment[P]>
  }




  export type MedicineAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicineAssignmentWhereInput
    orderBy?: MedicineAssignmentOrderByWithAggregationInput | MedicineAssignmentOrderByWithAggregationInput[]
    by: MedicineAssignmentScalarFieldEnum[] | MedicineAssignmentScalarFieldEnum
    having?: MedicineAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicineAssignmentCountAggregateInputType | true
    _avg?: MedicineAssignmentAvgAggregateInputType
    _sum?: MedicineAssignmentSumAggregateInputType
    _min?: MedicineAssignmentMinAggregateInputType
    _max?: MedicineAssignmentMaxAggregateInputType
  }

  export type MedicineAssignmentGroupByOutputType = {
    id: string
    patientId: string
    boxId: string | null
    medicineId: string
    dosage: string
    administrationMethodOverride: string | null
    scheduleTimes: string[]
    startDate: Date
    durationDays: number
    endDate: Date
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MedicineAssignmentCountAggregateOutputType | null
    _avg: MedicineAssignmentAvgAggregateOutputType | null
    _sum: MedicineAssignmentSumAggregateOutputType | null
    _min: MedicineAssignmentMinAggregateOutputType | null
    _max: MedicineAssignmentMaxAggregateOutputType | null
  }

  type GetMedicineAssignmentGroupByPayload<T extends MedicineAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicineAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicineAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicineAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], MedicineAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type MedicineAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    boxId?: boolean
    medicineId?: boolean
    dosage?: boolean
    administrationMethodOverride?: boolean
    scheduleTimes?: boolean
    startDate?: boolean
    durationDays?: boolean
    endDate?: boolean
    repeat?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    box?: boolean | MedicineAssignment$boxArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    administrationLogs?: boolean | MedicineAssignment$administrationLogsArgs<ExtArgs>
    _count?: boolean | MedicineAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineAssignment"]>

  export type MedicineAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    boxId?: boolean
    medicineId?: boolean
    dosage?: boolean
    administrationMethodOverride?: boolean
    scheduleTimes?: boolean
    startDate?: boolean
    durationDays?: boolean
    endDate?: boolean
    repeat?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    box?: boolean | MedicineAssignment$boxArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineAssignment"]>

  export type MedicineAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    boxId?: boolean
    medicineId?: boolean
    dosage?: boolean
    administrationMethodOverride?: boolean
    scheduleTimes?: boolean
    startDate?: boolean
    durationDays?: boolean
    endDate?: boolean
    repeat?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    box?: boolean | MedicineAssignment$boxArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicineAssignment"]>

  export type MedicineAssignmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    boxId?: boolean
    medicineId?: boolean
    dosage?: boolean
    administrationMethodOverride?: boolean
    scheduleTimes?: boolean
    startDate?: boolean
    durationDays?: boolean
    endDate?: boolean
    repeat?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicineAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "boxId" | "medicineId" | "dosage" | "administrationMethodOverride" | "scheduleTimes" | "startDate" | "durationDays" | "endDate" | "repeat" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["medicineAssignment"]>
  export type MedicineAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    box?: boolean | MedicineAssignment$boxArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
    administrationLogs?: boolean | MedicineAssignment$administrationLogsArgs<ExtArgs>
    _count?: boolean | MedicineAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicineAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    box?: boolean | MedicineAssignment$boxArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }
  export type MedicineAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    box?: boolean | MedicineAssignment$boxArgs<ExtArgs>
    medicine?: boolean | MedicineDefaultArgs<ExtArgs>
  }

  export type $MedicineAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicineAssignment"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
      box: Prisma.$BoxPayload<ExtArgs> | null
      medicine: Prisma.$MedicinePayload<ExtArgs>
      administrationLogs: Prisma.$AdministrationLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      boxId: string | null
      medicineId: string
      dosage: string
      administrationMethodOverride: string | null
      scheduleTimes: string[]
      startDate: Date
      durationDays: number
      endDate: Date
      repeat: boolean
      status: $Enums.AssignmentStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicineAssignment"]>
    composites: {}
  }

  type MedicineAssignmentGetPayload<S extends boolean | null | undefined | MedicineAssignmentDefaultArgs> = $Result.GetResult<Prisma.$MedicineAssignmentPayload, S>

  type MedicineAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicineAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicineAssignmentCountAggregateInputType | true
    }

  export interface MedicineAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicineAssignment'], meta: { name: 'MedicineAssignment' } }
    /**
     * Find zero or one MedicineAssignment that matches the filter.
     * @param {MedicineAssignmentFindUniqueArgs} args - Arguments to find a MedicineAssignment
     * @example
     * // Get one MedicineAssignment
     * const medicineAssignment = await prisma.medicineAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicineAssignmentFindUniqueArgs>(args: SelectSubset<T, MedicineAssignmentFindUniqueArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicineAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicineAssignmentFindUniqueOrThrowArgs} args - Arguments to find a MedicineAssignment
     * @example
     * // Get one MedicineAssignment
     * const medicineAssignment = await prisma.medicineAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicineAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicineAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentFindFirstArgs} args - Arguments to find a MedicineAssignment
     * @example
     * // Get one MedicineAssignment
     * const medicineAssignment = await prisma.medicineAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicineAssignmentFindFirstArgs>(args?: SelectSubset<T, MedicineAssignmentFindFirstArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicineAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentFindFirstOrThrowArgs} args - Arguments to find a MedicineAssignment
     * @example
     * // Get one MedicineAssignment
     * const medicineAssignment = await prisma.medicineAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicineAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicineAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicineAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicineAssignments
     * const medicineAssignments = await prisma.medicineAssignment.findMany()
     * 
     * // Get first 10 MedicineAssignments
     * const medicineAssignments = await prisma.medicineAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicineAssignmentWithIdOnly = await prisma.medicineAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicineAssignmentFindManyArgs>(args?: SelectSubset<T, MedicineAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicineAssignment.
     * @param {MedicineAssignmentCreateArgs} args - Arguments to create a MedicineAssignment.
     * @example
     * // Create one MedicineAssignment
     * const MedicineAssignment = await prisma.medicineAssignment.create({
     *   data: {
     *     // ... data to create a MedicineAssignment
     *   }
     * })
     * 
     */
    create<T extends MedicineAssignmentCreateArgs>(args: SelectSubset<T, MedicineAssignmentCreateArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicineAssignments.
     * @param {MedicineAssignmentCreateManyArgs} args - Arguments to create many MedicineAssignments.
     * @example
     * // Create many MedicineAssignments
     * const medicineAssignment = await prisma.medicineAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicineAssignmentCreateManyArgs>(args?: SelectSubset<T, MedicineAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicineAssignments and returns the data saved in the database.
     * @param {MedicineAssignmentCreateManyAndReturnArgs} args - Arguments to create many MedicineAssignments.
     * @example
     * // Create many MedicineAssignments
     * const medicineAssignment = await prisma.medicineAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicineAssignments and only return the `id`
     * const medicineAssignmentWithIdOnly = await prisma.medicineAssignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicineAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicineAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicineAssignment.
     * @param {MedicineAssignmentDeleteArgs} args - Arguments to delete one MedicineAssignment.
     * @example
     * // Delete one MedicineAssignment
     * const MedicineAssignment = await prisma.medicineAssignment.delete({
     *   where: {
     *     // ... filter to delete one MedicineAssignment
     *   }
     * })
     * 
     */
    delete<T extends MedicineAssignmentDeleteArgs>(args: SelectSubset<T, MedicineAssignmentDeleteArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicineAssignment.
     * @param {MedicineAssignmentUpdateArgs} args - Arguments to update one MedicineAssignment.
     * @example
     * // Update one MedicineAssignment
     * const medicineAssignment = await prisma.medicineAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicineAssignmentUpdateArgs>(args: SelectSubset<T, MedicineAssignmentUpdateArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicineAssignments.
     * @param {MedicineAssignmentDeleteManyArgs} args - Arguments to filter MedicineAssignments to delete.
     * @example
     * // Delete a few MedicineAssignments
     * const { count } = await prisma.medicineAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicineAssignmentDeleteManyArgs>(args?: SelectSubset<T, MedicineAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicineAssignments
     * const medicineAssignment = await prisma.medicineAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicineAssignmentUpdateManyArgs>(args: SelectSubset<T, MedicineAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicineAssignments and returns the data updated in the database.
     * @param {MedicineAssignmentUpdateManyAndReturnArgs} args - Arguments to update many MedicineAssignments.
     * @example
     * // Update many MedicineAssignments
     * const medicineAssignment = await prisma.medicineAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicineAssignments and only return the `id`
     * const medicineAssignmentWithIdOnly = await prisma.medicineAssignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicineAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicineAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicineAssignment.
     * @param {MedicineAssignmentUpsertArgs} args - Arguments to update or create a MedicineAssignment.
     * @example
     * // Update or create a MedicineAssignment
     * const medicineAssignment = await prisma.medicineAssignment.upsert({
     *   create: {
     *     // ... data to create a MedicineAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicineAssignment we want to update
     *   }
     * })
     */
    upsert<T extends MedicineAssignmentUpsertArgs>(args: SelectSubset<T, MedicineAssignmentUpsertArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicineAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentCountArgs} args - Arguments to filter MedicineAssignments to count.
     * @example
     * // Count the number of MedicineAssignments
     * const count = await prisma.medicineAssignment.count({
     *   where: {
     *     // ... the filter for the MedicineAssignments we want to count
     *   }
     * })
    **/
    count<T extends MedicineAssignmentCountArgs>(
      args?: Subset<T, MedicineAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicineAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicineAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicineAssignmentAggregateArgs>(args: Subset<T, MedicineAssignmentAggregateArgs>): Prisma.PrismaPromise<GetMedicineAssignmentAggregateType<T>>

    /**
     * Group by MedicineAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicineAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicineAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicineAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: MedicineAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicineAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicineAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicineAssignment model
   */
  readonly fields: MedicineAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicineAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicineAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    box<T extends MedicineAssignment$boxArgs<ExtArgs> = {}>(args?: Subset<T, MedicineAssignment$boxArgs<ExtArgs>>): Prisma__BoxClient<$Result.GetResult<Prisma.$BoxPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    medicine<T extends MedicineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineDefaultArgs<ExtArgs>>): Prisma__MedicineClient<$Result.GetResult<Prisma.$MedicinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    administrationLogs<T extends MedicineAssignment$administrationLogsArgs<ExtArgs> = {}>(args?: Subset<T, MedicineAssignment$administrationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicineAssignment model
   */
  interface MedicineAssignmentFieldRefs {
    readonly id: FieldRef<"MedicineAssignment", 'String'>
    readonly patientId: FieldRef<"MedicineAssignment", 'String'>
    readonly boxId: FieldRef<"MedicineAssignment", 'String'>
    readonly medicineId: FieldRef<"MedicineAssignment", 'String'>
    readonly dosage: FieldRef<"MedicineAssignment", 'String'>
    readonly administrationMethodOverride: FieldRef<"MedicineAssignment", 'String'>
    readonly scheduleTimes: FieldRef<"MedicineAssignment", 'String[]'>
    readonly startDate: FieldRef<"MedicineAssignment", 'DateTime'>
    readonly durationDays: FieldRef<"MedicineAssignment", 'Int'>
    readonly endDate: FieldRef<"MedicineAssignment", 'DateTime'>
    readonly repeat: FieldRef<"MedicineAssignment", 'Boolean'>
    readonly status: FieldRef<"MedicineAssignment", 'AssignmentStatus'>
    readonly notes: FieldRef<"MedicineAssignment", 'String'>
    readonly createdAt: FieldRef<"MedicineAssignment", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicineAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicineAssignment findUnique
   */
  export type MedicineAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAssignment to fetch.
     */
    where: MedicineAssignmentWhereUniqueInput
  }

  /**
   * MedicineAssignment findUniqueOrThrow
   */
  export type MedicineAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAssignment to fetch.
     */
    where: MedicineAssignmentWhereUniqueInput
  }

  /**
   * MedicineAssignment findFirst
   */
  export type MedicineAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAssignment to fetch.
     */
    where?: MedicineAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAssignments to fetch.
     */
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineAssignments.
     */
    cursor?: MedicineAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineAssignments.
     */
    distinct?: MedicineAssignmentScalarFieldEnum | MedicineAssignmentScalarFieldEnum[]
  }

  /**
   * MedicineAssignment findFirstOrThrow
   */
  export type MedicineAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAssignment to fetch.
     */
    where?: MedicineAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAssignments to fetch.
     */
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicineAssignments.
     */
    cursor?: MedicineAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineAssignments.
     */
    distinct?: MedicineAssignmentScalarFieldEnum | MedicineAssignmentScalarFieldEnum[]
  }

  /**
   * MedicineAssignment findMany
   */
  export type MedicineAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which MedicineAssignments to fetch.
     */
    where?: MedicineAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicineAssignments to fetch.
     */
    orderBy?: MedicineAssignmentOrderByWithRelationInput | MedicineAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicineAssignments.
     */
    cursor?: MedicineAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicineAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicineAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicineAssignments.
     */
    distinct?: MedicineAssignmentScalarFieldEnum | MedicineAssignmentScalarFieldEnum[]
  }

  /**
   * MedicineAssignment create
   */
  export type MedicineAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicineAssignment.
     */
    data: XOR<MedicineAssignmentCreateInput, MedicineAssignmentUncheckedCreateInput>
  }

  /**
   * MedicineAssignment createMany
   */
  export type MedicineAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicineAssignments.
     */
    data: MedicineAssignmentCreateManyInput | MedicineAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicineAssignment createManyAndReturn
   */
  export type MedicineAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many MedicineAssignments.
     */
    data: MedicineAssignmentCreateManyInput | MedicineAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineAssignment update
   */
  export type MedicineAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicineAssignment.
     */
    data: XOR<MedicineAssignmentUpdateInput, MedicineAssignmentUncheckedUpdateInput>
    /**
     * Choose, which MedicineAssignment to update.
     */
    where: MedicineAssignmentWhereUniqueInput
  }

  /**
   * MedicineAssignment updateMany
   */
  export type MedicineAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicineAssignments.
     */
    data: XOR<MedicineAssignmentUpdateManyMutationInput, MedicineAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which MedicineAssignments to update
     */
    where?: MedicineAssignmentWhereInput
    /**
     * Limit how many MedicineAssignments to update.
     */
    limit?: number
  }

  /**
   * MedicineAssignment updateManyAndReturn
   */
  export type MedicineAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update MedicineAssignments.
     */
    data: XOR<MedicineAssignmentUpdateManyMutationInput, MedicineAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which MedicineAssignments to update
     */
    where?: MedicineAssignmentWhereInput
    /**
     * Limit how many MedicineAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicineAssignment upsert
   */
  export type MedicineAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicineAssignment to update in case it exists.
     */
    where: MedicineAssignmentWhereUniqueInput
    /**
     * In case the MedicineAssignment found by the `where` argument doesn't exist, create a new MedicineAssignment with this data.
     */
    create: XOR<MedicineAssignmentCreateInput, MedicineAssignmentUncheckedCreateInput>
    /**
     * In case the MedicineAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicineAssignmentUpdateInput, MedicineAssignmentUncheckedUpdateInput>
  }

  /**
   * MedicineAssignment delete
   */
  export type MedicineAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
    /**
     * Filter which MedicineAssignment to delete.
     */
    where: MedicineAssignmentWhereUniqueInput
  }

  /**
   * MedicineAssignment deleteMany
   */
  export type MedicineAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicineAssignments to delete
     */
    where?: MedicineAssignmentWhereInput
    /**
     * Limit how many MedicineAssignments to delete.
     */
    limit?: number
  }

  /**
   * MedicineAssignment.box
   */
  export type MedicineAssignment$boxArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Box
     */
    select?: BoxSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Box
     */
    omit?: BoxOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoxInclude<ExtArgs> | null
    where?: BoxWhereInput
  }

  /**
   * MedicineAssignment.administrationLogs
   */
  export type MedicineAssignment$administrationLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    where?: AdministrationLogWhereInput
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    cursor?: AdministrationLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministrationLogScalarFieldEnum | AdministrationLogScalarFieldEnum[]
  }

  /**
   * MedicineAssignment without action
   */
  export type MedicineAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicineAssignment
     */
    select?: MedicineAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicineAssignment
     */
    omit?: MedicineAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicineAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model AdministrationLog
   */

  export type AggregateAdministrationLog = {
    _count: AdministrationLogCountAggregateOutputType | null
    _min: AdministrationLogMinAggregateOutputType | null
    _max: AdministrationLogMaxAggregateOutputType | null
  }

  export type AdministrationLogMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    patientId: string | null
    staffId: string | null
    scheduledTime: Date | null
    administeredAt: Date | null
    status: $Enums.AdministrationStatus | null
    skipReason: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministrationLogMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    patientId: string | null
    staffId: string | null
    scheduledTime: Date | null
    administeredAt: Date | null
    status: $Enums.AdministrationStatus | null
    skipReason: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministrationLogCountAggregateOutputType = {
    id: number
    assignmentId: number
    patientId: number
    staffId: number
    scheduledTime: number
    administeredAt: number
    status: number
    skipReason: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministrationLogMinAggregateInputType = {
    id?: true
    assignmentId?: true
    patientId?: true
    staffId?: true
    scheduledTime?: true
    administeredAt?: true
    status?: true
    skipReason?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministrationLogMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    patientId?: true
    staffId?: true
    scheduledTime?: true
    administeredAt?: true
    status?: true
    skipReason?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministrationLogCountAggregateInputType = {
    id?: true
    assignmentId?: true
    patientId?: true
    staffId?: true
    scheduledTime?: true
    administeredAt?: true
    status?: true
    skipReason?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministrationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdministrationLog to aggregate.
     */
    where?: AdministrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdministrationLogs to fetch.
     */
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdministrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdministrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdministrationLogs
    **/
    _count?: true | AdministrationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministrationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministrationLogMaxAggregateInputType
  }

  export type GetAdministrationLogAggregateType<T extends AdministrationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrationLog[P]>
      : GetScalarType<T[P], AggregateAdministrationLog[P]>
  }




  export type AdministrationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministrationLogWhereInput
    orderBy?: AdministrationLogOrderByWithAggregationInput | AdministrationLogOrderByWithAggregationInput[]
    by: AdministrationLogScalarFieldEnum[] | AdministrationLogScalarFieldEnum
    having?: AdministrationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministrationLogCountAggregateInputType | true
    _min?: AdministrationLogMinAggregateInputType
    _max?: AdministrationLogMaxAggregateInputType
  }

  export type AdministrationLogGroupByOutputType = {
    id: string
    assignmentId: string
    patientId: string
    staffId: string
    scheduledTime: Date
    administeredAt: Date | null
    status: $Enums.AdministrationStatus
    skipReason: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdministrationLogCountAggregateOutputType | null
    _min: AdministrationLogMinAggregateOutputType | null
    _max: AdministrationLogMaxAggregateOutputType | null
  }

  type GetAdministrationLogGroupByPayload<T extends AdministrationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministrationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministrationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministrationLogGroupByOutputType[P]>
            : GetScalarType<T[P], AdministrationLogGroupByOutputType[P]>
        }
      >
    >


  export type AdministrationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    patientId?: boolean
    staffId?: boolean
    scheduledTime?: boolean
    administeredAt?: boolean
    status?: boolean
    skipReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | MedicineAssignmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrationLog"]>

  export type AdministrationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    patientId?: boolean
    staffId?: boolean
    scheduledTime?: boolean
    administeredAt?: boolean
    status?: boolean
    skipReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | MedicineAssignmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrationLog"]>

  export type AdministrationLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    patientId?: boolean
    staffId?: boolean
    scheduledTime?: boolean
    administeredAt?: boolean
    status?: boolean
    skipReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | MedicineAssignmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrationLog"]>

  export type AdministrationLogSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    patientId?: boolean
    staffId?: boolean
    scheduledTime?: boolean
    administeredAt?: boolean
    status?: boolean
    skipReason?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdministrationLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "patientId" | "staffId" | "scheduledTime" | "administeredAt" | "status" | "skipReason" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["administrationLog"]>
  export type AdministrationLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | MedicineAssignmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdministrationLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | MedicineAssignmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdministrationLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | MedicineAssignmentDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdministrationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdministrationLog"
    objects: {
      assignment: Prisma.$MedicineAssignmentPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      patientId: string
      staffId: string
      scheduledTime: Date
      administeredAt: Date | null
      status: $Enums.AdministrationStatus
      skipReason: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrationLog"]>
    composites: {}
  }

  type AdministrationLogGetPayload<S extends boolean | null | undefined | AdministrationLogDefaultArgs> = $Result.GetResult<Prisma.$AdministrationLogPayload, S>

  type AdministrationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministrationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministrationLogCountAggregateInputType | true
    }

  export interface AdministrationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdministrationLog'], meta: { name: 'AdministrationLog' } }
    /**
     * Find zero or one AdministrationLog that matches the filter.
     * @param {AdministrationLogFindUniqueArgs} args - Arguments to find a AdministrationLog
     * @example
     * // Get one AdministrationLog
     * const administrationLog = await prisma.administrationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministrationLogFindUniqueArgs>(args: SelectSubset<T, AdministrationLogFindUniqueArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdministrationLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministrationLogFindUniqueOrThrowArgs} args - Arguments to find a AdministrationLog
     * @example
     * // Get one AdministrationLog
     * const administrationLog = await prisma.administrationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministrationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministrationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdministrationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogFindFirstArgs} args - Arguments to find a AdministrationLog
     * @example
     * // Get one AdministrationLog
     * const administrationLog = await prisma.administrationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministrationLogFindFirstArgs>(args?: SelectSubset<T, AdministrationLogFindFirstArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdministrationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogFindFirstOrThrowArgs} args - Arguments to find a AdministrationLog
     * @example
     * // Get one AdministrationLog
     * const administrationLog = await prisma.administrationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministrationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministrationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdministrationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdministrationLogs
     * const administrationLogs = await prisma.administrationLog.findMany()
     * 
     * // Get first 10 AdministrationLogs
     * const administrationLogs = await prisma.administrationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administrationLogWithIdOnly = await prisma.administrationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministrationLogFindManyArgs>(args?: SelectSubset<T, AdministrationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdministrationLog.
     * @param {AdministrationLogCreateArgs} args - Arguments to create a AdministrationLog.
     * @example
     * // Create one AdministrationLog
     * const AdministrationLog = await prisma.administrationLog.create({
     *   data: {
     *     // ... data to create a AdministrationLog
     *   }
     * })
     * 
     */
    create<T extends AdministrationLogCreateArgs>(args: SelectSubset<T, AdministrationLogCreateArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdministrationLogs.
     * @param {AdministrationLogCreateManyArgs} args - Arguments to create many AdministrationLogs.
     * @example
     * // Create many AdministrationLogs
     * const administrationLog = await prisma.administrationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministrationLogCreateManyArgs>(args?: SelectSubset<T, AdministrationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdministrationLogs and returns the data saved in the database.
     * @param {AdministrationLogCreateManyAndReturnArgs} args - Arguments to create many AdministrationLogs.
     * @example
     * // Create many AdministrationLogs
     * const administrationLog = await prisma.administrationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdministrationLogs and only return the `id`
     * const administrationLogWithIdOnly = await prisma.administrationLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministrationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministrationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdministrationLog.
     * @param {AdministrationLogDeleteArgs} args - Arguments to delete one AdministrationLog.
     * @example
     * // Delete one AdministrationLog
     * const AdministrationLog = await prisma.administrationLog.delete({
     *   where: {
     *     // ... filter to delete one AdministrationLog
     *   }
     * })
     * 
     */
    delete<T extends AdministrationLogDeleteArgs>(args: SelectSubset<T, AdministrationLogDeleteArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdministrationLog.
     * @param {AdministrationLogUpdateArgs} args - Arguments to update one AdministrationLog.
     * @example
     * // Update one AdministrationLog
     * const administrationLog = await prisma.administrationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministrationLogUpdateArgs>(args: SelectSubset<T, AdministrationLogUpdateArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdministrationLogs.
     * @param {AdministrationLogDeleteManyArgs} args - Arguments to filter AdministrationLogs to delete.
     * @example
     * // Delete a few AdministrationLogs
     * const { count } = await prisma.administrationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministrationLogDeleteManyArgs>(args?: SelectSubset<T, AdministrationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdministrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdministrationLogs
     * const administrationLog = await prisma.administrationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministrationLogUpdateManyArgs>(args: SelectSubset<T, AdministrationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdministrationLogs and returns the data updated in the database.
     * @param {AdministrationLogUpdateManyAndReturnArgs} args - Arguments to update many AdministrationLogs.
     * @example
     * // Update many AdministrationLogs
     * const administrationLog = await prisma.administrationLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdministrationLogs and only return the `id`
     * const administrationLogWithIdOnly = await prisma.administrationLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministrationLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministrationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdministrationLog.
     * @param {AdministrationLogUpsertArgs} args - Arguments to update or create a AdministrationLog.
     * @example
     * // Update or create a AdministrationLog
     * const administrationLog = await prisma.administrationLog.upsert({
     *   create: {
     *     // ... data to create a AdministrationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdministrationLog we want to update
     *   }
     * })
     */
    upsert<T extends AdministrationLogUpsertArgs>(args: SelectSubset<T, AdministrationLogUpsertArgs<ExtArgs>>): Prisma__AdministrationLogClient<$Result.GetResult<Prisma.$AdministrationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdministrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogCountArgs} args - Arguments to filter AdministrationLogs to count.
     * @example
     * // Count the number of AdministrationLogs
     * const count = await prisma.administrationLog.count({
     *   where: {
     *     // ... the filter for the AdministrationLogs we want to count
     *   }
     * })
    **/
    count<T extends AdministrationLogCountArgs>(
      args?: Subset<T, AdministrationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministrationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdministrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministrationLogAggregateArgs>(args: Subset<T, AdministrationLogAggregateArgs>): Prisma.PrismaPromise<GetAdministrationLogAggregateType<T>>

    /**
     * Group by AdministrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrationLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministrationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministrationLogGroupByArgs['orderBy'] }
        : { orderBy?: AdministrationLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministrationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdministrationLog model
   */
  readonly fields: AdministrationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdministrationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministrationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends MedicineAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicineAssignmentDefaultArgs<ExtArgs>>): Prisma__MedicineAssignmentClient<$Result.GetResult<Prisma.$MedicineAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdministrationLog model
   */
  interface AdministrationLogFieldRefs {
    readonly id: FieldRef<"AdministrationLog", 'String'>
    readonly assignmentId: FieldRef<"AdministrationLog", 'String'>
    readonly patientId: FieldRef<"AdministrationLog", 'String'>
    readonly staffId: FieldRef<"AdministrationLog", 'String'>
    readonly scheduledTime: FieldRef<"AdministrationLog", 'DateTime'>
    readonly administeredAt: FieldRef<"AdministrationLog", 'DateTime'>
    readonly status: FieldRef<"AdministrationLog", 'AdministrationStatus'>
    readonly skipReason: FieldRef<"AdministrationLog", 'String'>
    readonly notes: FieldRef<"AdministrationLog", 'String'>
    readonly createdAt: FieldRef<"AdministrationLog", 'DateTime'>
    readonly updatedAt: FieldRef<"AdministrationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdministrationLog findUnique
   */
  export type AdministrationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * Filter, which AdministrationLog to fetch.
     */
    where: AdministrationLogWhereUniqueInput
  }

  /**
   * AdministrationLog findUniqueOrThrow
   */
  export type AdministrationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * Filter, which AdministrationLog to fetch.
     */
    where: AdministrationLogWhereUniqueInput
  }

  /**
   * AdministrationLog findFirst
   */
  export type AdministrationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * Filter, which AdministrationLog to fetch.
     */
    where?: AdministrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdministrationLogs to fetch.
     */
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdministrationLogs.
     */
    cursor?: AdministrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdministrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdministrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdministrationLogs.
     */
    distinct?: AdministrationLogScalarFieldEnum | AdministrationLogScalarFieldEnum[]
  }

  /**
   * AdministrationLog findFirstOrThrow
   */
  export type AdministrationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * Filter, which AdministrationLog to fetch.
     */
    where?: AdministrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdministrationLogs to fetch.
     */
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdministrationLogs.
     */
    cursor?: AdministrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdministrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdministrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdministrationLogs.
     */
    distinct?: AdministrationLogScalarFieldEnum | AdministrationLogScalarFieldEnum[]
  }

  /**
   * AdministrationLog findMany
   */
  export type AdministrationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * Filter, which AdministrationLogs to fetch.
     */
    where?: AdministrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdministrationLogs to fetch.
     */
    orderBy?: AdministrationLogOrderByWithRelationInput | AdministrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdministrationLogs.
     */
    cursor?: AdministrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdministrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdministrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdministrationLogs.
     */
    distinct?: AdministrationLogScalarFieldEnum | AdministrationLogScalarFieldEnum[]
  }

  /**
   * AdministrationLog create
   */
  export type AdministrationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AdministrationLog.
     */
    data: XOR<AdministrationLogCreateInput, AdministrationLogUncheckedCreateInput>
  }

  /**
   * AdministrationLog createMany
   */
  export type AdministrationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdministrationLogs.
     */
    data: AdministrationLogCreateManyInput | AdministrationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdministrationLog createManyAndReturn
   */
  export type AdministrationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * The data used to create many AdministrationLogs.
     */
    data: AdministrationLogCreateManyInput | AdministrationLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdministrationLog update
   */
  export type AdministrationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AdministrationLog.
     */
    data: XOR<AdministrationLogUpdateInput, AdministrationLogUncheckedUpdateInput>
    /**
     * Choose, which AdministrationLog to update.
     */
    where: AdministrationLogWhereUniqueInput
  }

  /**
   * AdministrationLog updateMany
   */
  export type AdministrationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdministrationLogs.
     */
    data: XOR<AdministrationLogUpdateManyMutationInput, AdministrationLogUncheckedUpdateManyInput>
    /**
     * Filter which AdministrationLogs to update
     */
    where?: AdministrationLogWhereInput
    /**
     * Limit how many AdministrationLogs to update.
     */
    limit?: number
  }

  /**
   * AdministrationLog updateManyAndReturn
   */
  export type AdministrationLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * The data used to update AdministrationLogs.
     */
    data: XOR<AdministrationLogUpdateManyMutationInput, AdministrationLogUncheckedUpdateManyInput>
    /**
     * Filter which AdministrationLogs to update
     */
    where?: AdministrationLogWhereInput
    /**
     * Limit how many AdministrationLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdministrationLog upsert
   */
  export type AdministrationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AdministrationLog to update in case it exists.
     */
    where: AdministrationLogWhereUniqueInput
    /**
     * In case the AdministrationLog found by the `where` argument doesn't exist, create a new AdministrationLog with this data.
     */
    create: XOR<AdministrationLogCreateInput, AdministrationLogUncheckedCreateInput>
    /**
     * In case the AdministrationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministrationLogUpdateInput, AdministrationLogUncheckedUpdateInput>
  }

  /**
   * AdministrationLog delete
   */
  export type AdministrationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
    /**
     * Filter which AdministrationLog to delete.
     */
    where: AdministrationLogWhereUniqueInput
  }

  /**
   * AdministrationLog deleteMany
   */
  export type AdministrationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdministrationLogs to delete
     */
    where?: AdministrationLogWhereInput
    /**
     * Limit how many AdministrationLogs to delete.
     */
    limit?: number
  }

  /**
   * AdministrationLog without action
   */
  export type AdministrationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrationLog
     */
    select?: AdministrationLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdministrationLog
     */
    omit?: AdministrationLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrationLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    head: 'head',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    roomNumber: 'roomNumber',
    capacity: 'capacity',
    status: 'status',
    departmentId: 'departmentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    gender: 'gender',
    nationalId: 'nationalId',
    departmentId: 'departmentId',
    room: 'room',
    allergies: 'allergies',
    status: 'status',
    notes: 'notes',
    boxId: 'boxId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const MedicineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    administrationMethod: 'administrationMethod',
    defaultDosage: 'defaultDosage',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineScalarFieldEnum = (typeof MedicineScalarFieldEnum)[keyof typeof MedicineScalarFieldEnum]


  export const BoxScalarFieldEnum: {
    id: 'id',
    boxLabel: 'boxLabel',
    location: 'location',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BoxScalarFieldEnum = (typeof BoxScalarFieldEnum)[keyof typeof BoxScalarFieldEnum]


  export const MedicineAssignmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    boxId: 'boxId',
    medicineId: 'medicineId',
    dosage: 'dosage',
    administrationMethodOverride: 'administrationMethodOverride',
    scheduleTimes: 'scheduleTimes',
    startDate: 'startDate',
    durationDays: 'durationDays',
    endDate: 'endDate',
    repeat: 'repeat',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicineAssignmentScalarFieldEnum = (typeof MedicineAssignmentScalarFieldEnum)[keyof typeof MedicineAssignmentScalarFieldEnum]


  export const AdministrationLogScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    patientId: 'patientId',
    staffId: 'staffId',
    scheduledTime: 'scheduledTime',
    administeredAt: 'administeredAt',
    status: 'status',
    skipReason: 'skipReason',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministrationLogScalarFieldEnum = (typeof AdministrationLogScalarFieldEnum)[keyof typeof AdministrationLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DepartmentStatus'
   */
  export type EnumDepartmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepartmentStatus'>
    


  /**
   * Reference to a field of type 'DepartmentStatus[]'
   */
  export type ListEnumDepartmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DepartmentStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'RoomStatus[]'
   */
  export type ListEnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'PatientStatus'
   */
  export type EnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus'>
    


  /**
   * Reference to a field of type 'PatientStatus[]'
   */
  export type ListEnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus[]'>
    


  /**
   * Reference to a field of type 'MedicineType'
   */
  export type EnumMedicineTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicineType'>
    


  /**
   * Reference to a field of type 'MedicineType[]'
   */
  export type ListEnumMedicineTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicineType[]'>
    


  /**
   * Reference to a field of type 'BoxStatus'
   */
  export type EnumBoxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoxStatus'>
    


  /**
   * Reference to a field of type 'BoxStatus[]'
   */
  export type ListEnumBoxStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BoxStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    


  /**
   * Reference to a field of type 'AdministrationStatus'
   */
  export type EnumAdministrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdministrationStatus'>
    


  /**
   * Reference to a field of type 'AdministrationStatus[]'
   */
  export type ListEnumAdministrationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdministrationStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    administrationLogs?: AdministrationLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrationLogs?: AdministrationLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    administrationLogs?: AdministrationLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringFilter<"Department"> | string
    head?: StringFilter<"Department"> | string
    status?: EnumDepartmentStatusFilter<"Department"> | $Enums.DepartmentStatus
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    rooms?: RoomListRelationFilter
    patients?: PatientListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    head?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    description?: StringFilter<"Department"> | string
    head?: StringFilter<"Department"> | string
    status?: EnumDepartmentStatusFilter<"Department"> | $Enums.DepartmentStatus
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    rooms?: RoomListRelationFilter
    patients?: PatientListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    head?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    description?: StringWithAggregatesFilter<"Department"> | string
    head?: StringWithAggregatesFilter<"Department"> | string
    status?: EnumDepartmentStatusWithAggregatesFilter<"Department"> | $Enums.DepartmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    departmentId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomNumber?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    departmentId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    department?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    roomNumber?: StringWithAggregatesFilter<"Room"> | string
    capacity?: IntWithAggregatesFilter<"Room"> | number
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    departmentId?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    nationalId?: StringFilter<"Patient"> | string
    departmentId?: StringNullableFilter<"Patient"> | string | null
    room?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    notes?: StringNullableFilter<"Patient"> | string | null
    boxId?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    box?: XOR<BoxNullableScalarRelationFilter, BoxWhereInput> | null
    medicineAssignments?: MedicineAssignmentListRelationFilter
    administrationLogs?: AdministrationLogListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    nationalId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    room?: SortOrderInput | SortOrder
    allergies?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    boxId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    box?: BoxOrderByWithRelationInput
    medicineAssignments?: MedicineAssignmentOrderByRelationAggregateInput
    administrationLogs?: AdministrationLogOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nationalId?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    departmentId?: StringNullableFilter<"Patient"> | string | null
    room?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    notes?: StringNullableFilter<"Patient"> | string | null
    boxId?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    box?: XOR<BoxNullableScalarRelationFilter, BoxWhereInput> | null
    medicineAssignments?: MedicineAssignmentListRelationFilter
    administrationLogs?: AdministrationLogListRelationFilter
  }, "id" | "nationalId">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    nationalId?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    room?: SortOrderInput | SortOrder
    allergies?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    boxId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    age?: IntWithAggregatesFilter<"Patient"> | number
    gender?: EnumGenderWithAggregatesFilter<"Patient"> | $Enums.Gender
    nationalId?: StringWithAggregatesFilter<"Patient"> | string
    departmentId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    room?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    status?: EnumPatientStatusWithAggregatesFilter<"Patient"> | $Enums.PatientStatus
    notes?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    boxId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type MedicineWhereInput = {
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    id?: StringFilter<"Medicine"> | string
    name?: StringFilter<"Medicine"> | string
    type?: EnumMedicineTypeFilter<"Medicine"> | $Enums.MedicineType
    administrationMethod?: StringNullableFilter<"Medicine"> | string | null
    defaultDosage?: StringNullableFilter<"Medicine"> | string | null
    notes?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    medicineAssignments?: MedicineAssignmentListRelationFilter
  }

  export type MedicineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    administrationMethod?: SortOrderInput | SortOrder
    defaultDosage?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medicineAssignments?: MedicineAssignmentOrderByRelationAggregateInput
  }

  export type MedicineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicineWhereInput | MedicineWhereInput[]
    OR?: MedicineWhereInput[]
    NOT?: MedicineWhereInput | MedicineWhereInput[]
    name?: StringFilter<"Medicine"> | string
    type?: EnumMedicineTypeFilter<"Medicine"> | $Enums.MedicineType
    administrationMethod?: StringNullableFilter<"Medicine"> | string | null
    defaultDosage?: StringNullableFilter<"Medicine"> | string | null
    notes?: StringNullableFilter<"Medicine"> | string | null
    createdAt?: DateTimeFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeFilter<"Medicine"> | Date | string
    medicineAssignments?: MedicineAssignmentListRelationFilter
  }, "id">

  export type MedicineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    administrationMethod?: SortOrderInput | SortOrder
    defaultDosage?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineCountOrderByAggregateInput
    _max?: MedicineMaxOrderByAggregateInput
    _min?: MedicineMinOrderByAggregateInput
  }

  export type MedicineScalarWhereWithAggregatesInput = {
    AND?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    OR?: MedicineScalarWhereWithAggregatesInput[]
    NOT?: MedicineScalarWhereWithAggregatesInput | MedicineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicine"> | string
    name?: StringWithAggregatesFilter<"Medicine"> | string
    type?: EnumMedicineTypeWithAggregatesFilter<"Medicine"> | $Enums.MedicineType
    administrationMethod?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    defaultDosage?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Medicine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medicine"> | Date | string
  }

  export type BoxWhereInput = {
    AND?: BoxWhereInput | BoxWhereInput[]
    OR?: BoxWhereInput[]
    NOT?: BoxWhereInput | BoxWhereInput[]
    id?: StringFilter<"Box"> | string
    boxLabel?: StringFilter<"Box"> | string
    location?: StringNullableFilter<"Box"> | string | null
    status?: EnumBoxStatusFilter<"Box"> | $Enums.BoxStatus
    notes?: StringNullableFilter<"Box"> | string | null
    createdAt?: DateTimeFilter<"Box"> | Date | string
    updatedAt?: DateTimeFilter<"Box"> | Date | string
    patients?: PatientListRelationFilter
    medicineAssignments?: MedicineAssignmentListRelationFilter
  }

  export type BoxOrderByWithRelationInput = {
    id?: SortOrder
    boxLabel?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patients?: PatientOrderByRelationAggregateInput
    medicineAssignments?: MedicineAssignmentOrderByRelationAggregateInput
  }

  export type BoxWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    boxLabel?: string
    AND?: BoxWhereInput | BoxWhereInput[]
    OR?: BoxWhereInput[]
    NOT?: BoxWhereInput | BoxWhereInput[]
    location?: StringNullableFilter<"Box"> | string | null
    status?: EnumBoxStatusFilter<"Box"> | $Enums.BoxStatus
    notes?: StringNullableFilter<"Box"> | string | null
    createdAt?: DateTimeFilter<"Box"> | Date | string
    updatedAt?: DateTimeFilter<"Box"> | Date | string
    patients?: PatientListRelationFilter
    medicineAssignments?: MedicineAssignmentListRelationFilter
  }, "id" | "boxLabel">

  export type BoxOrderByWithAggregationInput = {
    id?: SortOrder
    boxLabel?: SortOrder
    location?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BoxCountOrderByAggregateInput
    _max?: BoxMaxOrderByAggregateInput
    _min?: BoxMinOrderByAggregateInput
  }

  export type BoxScalarWhereWithAggregatesInput = {
    AND?: BoxScalarWhereWithAggregatesInput | BoxScalarWhereWithAggregatesInput[]
    OR?: BoxScalarWhereWithAggregatesInput[]
    NOT?: BoxScalarWhereWithAggregatesInput | BoxScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Box"> | string
    boxLabel?: StringWithAggregatesFilter<"Box"> | string
    location?: StringNullableWithAggregatesFilter<"Box"> | string | null
    status?: EnumBoxStatusWithAggregatesFilter<"Box"> | $Enums.BoxStatus
    notes?: StringNullableWithAggregatesFilter<"Box"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Box"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Box"> | Date | string
  }

  export type MedicineAssignmentWhereInput = {
    AND?: MedicineAssignmentWhereInput | MedicineAssignmentWhereInput[]
    OR?: MedicineAssignmentWhereInput[]
    NOT?: MedicineAssignmentWhereInput | MedicineAssignmentWhereInput[]
    id?: StringFilter<"MedicineAssignment"> | string
    patientId?: StringFilter<"MedicineAssignment"> | string
    boxId?: StringNullableFilter<"MedicineAssignment"> | string | null
    medicineId?: StringFilter<"MedicineAssignment"> | string
    dosage?: StringFilter<"MedicineAssignment"> | string
    administrationMethodOverride?: StringNullableFilter<"MedicineAssignment"> | string | null
    scheduleTimes?: StringNullableListFilter<"MedicineAssignment">
    startDate?: DateTimeFilter<"MedicineAssignment"> | Date | string
    durationDays?: IntFilter<"MedicineAssignment"> | number
    endDate?: DateTimeFilter<"MedicineAssignment"> | Date | string
    repeat?: BoolFilter<"MedicineAssignment"> | boolean
    status?: EnumAssignmentStatusFilter<"MedicineAssignment"> | $Enums.AssignmentStatus
    notes?: StringNullableFilter<"MedicineAssignment"> | string | null
    createdAt?: DateTimeFilter<"MedicineAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"MedicineAssignment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    box?: XOR<BoxNullableScalarRelationFilter, BoxWhereInput> | null
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    administrationLogs?: AdministrationLogListRelationFilter
  }

  export type MedicineAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    boxId?: SortOrderInput | SortOrder
    medicineId?: SortOrder
    dosage?: SortOrder
    administrationMethodOverride?: SortOrderInput | SortOrder
    scheduleTimes?: SortOrder
    startDate?: SortOrder
    durationDays?: SortOrder
    endDate?: SortOrder
    repeat?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    box?: BoxOrderByWithRelationInput
    medicine?: MedicineOrderByWithRelationInput
    administrationLogs?: AdministrationLogOrderByRelationAggregateInput
  }

  export type MedicineAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicineAssignmentWhereInput | MedicineAssignmentWhereInput[]
    OR?: MedicineAssignmentWhereInput[]
    NOT?: MedicineAssignmentWhereInput | MedicineAssignmentWhereInput[]
    patientId?: StringFilter<"MedicineAssignment"> | string
    boxId?: StringNullableFilter<"MedicineAssignment"> | string | null
    medicineId?: StringFilter<"MedicineAssignment"> | string
    dosage?: StringFilter<"MedicineAssignment"> | string
    administrationMethodOverride?: StringNullableFilter<"MedicineAssignment"> | string | null
    scheduleTimes?: StringNullableListFilter<"MedicineAssignment">
    startDate?: DateTimeFilter<"MedicineAssignment"> | Date | string
    durationDays?: IntFilter<"MedicineAssignment"> | number
    endDate?: DateTimeFilter<"MedicineAssignment"> | Date | string
    repeat?: BoolFilter<"MedicineAssignment"> | boolean
    status?: EnumAssignmentStatusFilter<"MedicineAssignment"> | $Enums.AssignmentStatus
    notes?: StringNullableFilter<"MedicineAssignment"> | string | null
    createdAt?: DateTimeFilter<"MedicineAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"MedicineAssignment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    box?: XOR<BoxNullableScalarRelationFilter, BoxWhereInput> | null
    medicine?: XOR<MedicineScalarRelationFilter, MedicineWhereInput>
    administrationLogs?: AdministrationLogListRelationFilter
  }, "id">

  export type MedicineAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    boxId?: SortOrderInput | SortOrder
    medicineId?: SortOrder
    dosage?: SortOrder
    administrationMethodOverride?: SortOrderInput | SortOrder
    scheduleTimes?: SortOrder
    startDate?: SortOrder
    durationDays?: SortOrder
    endDate?: SortOrder
    repeat?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicineAssignmentCountOrderByAggregateInput
    _avg?: MedicineAssignmentAvgOrderByAggregateInput
    _max?: MedicineAssignmentMaxOrderByAggregateInput
    _min?: MedicineAssignmentMinOrderByAggregateInput
    _sum?: MedicineAssignmentSumOrderByAggregateInput
  }

  export type MedicineAssignmentScalarWhereWithAggregatesInput = {
    AND?: MedicineAssignmentScalarWhereWithAggregatesInput | MedicineAssignmentScalarWhereWithAggregatesInput[]
    OR?: MedicineAssignmentScalarWhereWithAggregatesInput[]
    NOT?: MedicineAssignmentScalarWhereWithAggregatesInput | MedicineAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicineAssignment"> | string
    patientId?: StringWithAggregatesFilter<"MedicineAssignment"> | string
    boxId?: StringNullableWithAggregatesFilter<"MedicineAssignment"> | string | null
    medicineId?: StringWithAggregatesFilter<"MedicineAssignment"> | string
    dosage?: StringWithAggregatesFilter<"MedicineAssignment"> | string
    administrationMethodOverride?: StringNullableWithAggregatesFilter<"MedicineAssignment"> | string | null
    scheduleTimes?: StringNullableListFilter<"MedicineAssignment">
    startDate?: DateTimeWithAggregatesFilter<"MedicineAssignment"> | Date | string
    durationDays?: IntWithAggregatesFilter<"MedicineAssignment"> | number
    endDate?: DateTimeWithAggregatesFilter<"MedicineAssignment"> | Date | string
    repeat?: BoolWithAggregatesFilter<"MedicineAssignment"> | boolean
    status?: EnumAssignmentStatusWithAggregatesFilter<"MedicineAssignment"> | $Enums.AssignmentStatus
    notes?: StringNullableWithAggregatesFilter<"MedicineAssignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MedicineAssignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicineAssignment"> | Date | string
  }

  export type AdministrationLogWhereInput = {
    AND?: AdministrationLogWhereInput | AdministrationLogWhereInput[]
    OR?: AdministrationLogWhereInput[]
    NOT?: AdministrationLogWhereInput | AdministrationLogWhereInput[]
    id?: StringFilter<"AdministrationLog"> | string
    assignmentId?: StringFilter<"AdministrationLog"> | string
    patientId?: StringFilter<"AdministrationLog"> | string
    staffId?: StringFilter<"AdministrationLog"> | string
    scheduledTime?: DateTimeFilter<"AdministrationLog"> | Date | string
    administeredAt?: DateTimeNullableFilter<"AdministrationLog"> | Date | string | null
    status?: EnumAdministrationStatusFilter<"AdministrationLog"> | $Enums.AdministrationStatus
    skipReason?: StringNullableFilter<"AdministrationLog"> | string | null
    notes?: StringNullableFilter<"AdministrationLog"> | string | null
    createdAt?: DateTimeFilter<"AdministrationLog"> | Date | string
    updatedAt?: DateTimeFilter<"AdministrationLog"> | Date | string
    assignment?: XOR<MedicineAssignmentScalarRelationFilter, MedicineAssignmentWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdministrationLogOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    patientId?: SortOrder
    staffId?: SortOrder
    scheduledTime?: SortOrder
    administeredAt?: SortOrderInput | SortOrder
    status?: SortOrder
    skipReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: MedicineAssignmentOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
  }

  export type AdministrationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdministrationLogWhereInput | AdministrationLogWhereInput[]
    OR?: AdministrationLogWhereInput[]
    NOT?: AdministrationLogWhereInput | AdministrationLogWhereInput[]
    assignmentId?: StringFilter<"AdministrationLog"> | string
    patientId?: StringFilter<"AdministrationLog"> | string
    staffId?: StringFilter<"AdministrationLog"> | string
    scheduledTime?: DateTimeFilter<"AdministrationLog"> | Date | string
    administeredAt?: DateTimeNullableFilter<"AdministrationLog"> | Date | string | null
    status?: EnumAdministrationStatusFilter<"AdministrationLog"> | $Enums.AdministrationStatus
    skipReason?: StringNullableFilter<"AdministrationLog"> | string | null
    notes?: StringNullableFilter<"AdministrationLog"> | string | null
    createdAt?: DateTimeFilter<"AdministrationLog"> | Date | string
    updatedAt?: DateTimeFilter<"AdministrationLog"> | Date | string
    assignment?: XOR<MedicineAssignmentScalarRelationFilter, MedicineAssignmentWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AdministrationLogOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    patientId?: SortOrder
    staffId?: SortOrder
    scheduledTime?: SortOrder
    administeredAt?: SortOrderInput | SortOrder
    status?: SortOrder
    skipReason?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministrationLogCountOrderByAggregateInput
    _max?: AdministrationLogMaxOrderByAggregateInput
    _min?: AdministrationLogMinOrderByAggregateInput
  }

  export type AdministrationLogScalarWhereWithAggregatesInput = {
    AND?: AdministrationLogScalarWhereWithAggregatesInput | AdministrationLogScalarWhereWithAggregatesInput[]
    OR?: AdministrationLogScalarWhereWithAggregatesInput[]
    NOT?: AdministrationLogScalarWhereWithAggregatesInput | AdministrationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdministrationLog"> | string
    assignmentId?: StringWithAggregatesFilter<"AdministrationLog"> | string
    patientId?: StringWithAggregatesFilter<"AdministrationLog"> | string
    staffId?: StringWithAggregatesFilter<"AdministrationLog"> | string
    scheduledTime?: DateTimeWithAggregatesFilter<"AdministrationLog"> | Date | string
    administeredAt?: DateTimeNullableWithAggregatesFilter<"AdministrationLog"> | Date | string | null
    status?: EnumAdministrationStatusWithAggregatesFilter<"AdministrationLog"> | $Enums.AdministrationStatus
    skipReason?: StringNullableWithAggregatesFilter<"AdministrationLog"> | string | null
    notes?: StringNullableWithAggregatesFilter<"AdministrationLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdministrationLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdministrationLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutDepartmentInput
    patients?: PatientCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutDepartmentInput
    patients?: PatientUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutDepartmentNestedInput
    patients?: PatientUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutDepartmentNestedInput
    patients?: PatientUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    department: DepartmentCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyInput = {
    id?: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    departmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    departmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutPatientsInput
    box?: BoxCreateNestedOneWithoutPatientsInput
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutPatientInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId?: string | null
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    boxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutPatientInput
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutPatientsNestedInput
    box?: BoxUpdateOneWithoutPatientsNestedInput
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutPatientNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutPatientNestedInput
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId?: string | null
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    boxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineCreateInput = {
    id?: string
    name: string
    type: $Enums.MedicineType
    administrationMethod?: string | null
    defaultDosage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.MedicineType
    administrationMethod?: string | null
    defaultDosage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutMedicineInput
  }

  export type MedicineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMedicineTypeFieldUpdateOperationsInput | $Enums.MedicineType
    administrationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    defaultDosage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMedicineTypeFieldUpdateOperationsInput | $Enums.MedicineType
    administrationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    defaultDosage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutMedicineNestedInput
  }

  export type MedicineCreateManyInput = {
    id?: string
    name: string
    type: $Enums.MedicineType
    administrationMethod?: string | null
    defaultDosage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMedicineTypeFieldUpdateOperationsInput | $Enums.MedicineType
    administrationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    defaultDosage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMedicineTypeFieldUpdateOperationsInput | $Enums.MedicineType
    administrationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    defaultDosage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxCreateInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutBoxInput
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutBoxInput
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutBoxNestedInput
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutBoxNestedInput
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type BoxCreateManyInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BoxUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BoxUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAssignmentCreateInput = {
    id?: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicineAssignmentsInput
    box?: BoxCreateNestedOneWithoutMedicineAssignmentsInput
    medicine: MedicineCreateNestedOneWithoutMedicineAssignmentsInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentUncheckedCreateInput = {
    id?: string
    patientId: string
    boxId?: string | null
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    box?: BoxUpdateOneWithoutMedicineAssignmentsNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentCreateManyInput = {
    id?: string
    patientId: string
    boxId?: string | null
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogCreateInput = {
    id?: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: MedicineAssignmentCreateNestedOneWithoutAdministrationLogsInput
    patient: PatientCreateNestedOneWithoutAdministrationLogsInput
    staff: UserCreateNestedOneWithoutAdministrationLogsInput
  }

  export type AdministrationLogUncheckedCreateInput = {
    id?: string
    assignmentId: string
    patientId: string
    staffId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: MedicineAssignmentUpdateOneRequiredWithoutAdministrationLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAdministrationLogsNestedInput
    staff?: UserUpdateOneRequiredWithoutAdministrationLogsNestedInput
  }

  export type AdministrationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogCreateManyInput = {
    id?: string
    assignmentId: string
    patientId: string
    staffId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministrationLogListRelationFilter = {
    every?: AdministrationLogWhereInput
    some?: AdministrationLogWhereInput
    none?: AdministrationLogWhereInput
  }

  export type AdministrationLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDepartmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepartmentStatus | EnumDepartmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentStatusFilter<$PrismaModel> | $Enums.DepartmentStatus
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    head?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    head?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    head?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDepartmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepartmentStatus | EnumDepartmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepartmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentStatusFilter<$PrismaModel>
    _max?: NestedEnumDepartmentStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
    capacity?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    capacity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type EnumPatientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusFilter<$PrismaModel> | $Enums.PatientStatus
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type BoxNullableScalarRelationFilter = {
    is?: BoxWhereInput | null
    isNot?: BoxWhereInput | null
  }

  export type MedicineAssignmentListRelationFilter = {
    every?: MedicineAssignmentWhereInput
    some?: MedicineAssignmentWhereInput
    none?: MedicineAssignmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MedicineAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    nationalId?: SortOrder
    departmentId?: SortOrder
    room?: SortOrder
    allergies?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    boxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    nationalId?: SortOrder
    departmentId?: SortOrder
    room?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    boxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    nationalId?: SortOrder
    departmentId?: SortOrder
    room?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    boxId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumPatientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusFilter<$PrismaModel>
  }

  export type EnumMedicineTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicineType | EnumMedicineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicineTypeFilter<$PrismaModel> | $Enums.MedicineType
  }

  export type MedicineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    administrationMethod?: SortOrder
    defaultDosage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    administrationMethod?: SortOrder
    defaultDosage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    administrationMethod?: SortOrder
    defaultDosage?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumMedicineTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicineType | EnumMedicineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicineTypeWithAggregatesFilter<$PrismaModel> | $Enums.MedicineType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedicineTypeFilter<$PrismaModel>
    _max?: NestedEnumMedicineTypeFilter<$PrismaModel>
  }

  export type EnumBoxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BoxStatus | EnumBoxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBoxStatusFilter<$PrismaModel> | $Enums.BoxStatus
  }

  export type BoxCountOrderByAggregateInput = {
    id?: SortOrder
    boxLabel?: SortOrder
    location?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoxMaxOrderByAggregateInput = {
    id?: SortOrder
    boxLabel?: SortOrder
    location?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoxMinOrderByAggregateInput = {
    id?: SortOrder
    boxLabel?: SortOrder
    location?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBoxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoxStatus | EnumBoxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBoxStatusWithAggregatesFilter<$PrismaModel> | $Enums.BoxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoxStatusFilter<$PrismaModel>
    _max?: NestedEnumBoxStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type MedicineScalarRelationFilter = {
    is?: MedicineWhereInput
    isNot?: MedicineWhereInput
  }

  export type MedicineAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    boxId?: SortOrder
    medicineId?: SortOrder
    dosage?: SortOrder
    administrationMethodOverride?: SortOrder
    scheduleTimes?: SortOrder
    startDate?: SortOrder
    durationDays?: SortOrder
    endDate?: SortOrder
    repeat?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAssignmentAvgOrderByAggregateInput = {
    durationDays?: SortOrder
  }

  export type MedicineAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    boxId?: SortOrder
    medicineId?: SortOrder
    dosage?: SortOrder
    administrationMethodOverride?: SortOrder
    startDate?: SortOrder
    durationDays?: SortOrder
    endDate?: SortOrder
    repeat?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    boxId?: SortOrder
    medicineId?: SortOrder
    dosage?: SortOrder
    administrationMethodOverride?: SortOrder
    startDate?: SortOrder
    durationDays?: SortOrder
    endDate?: SortOrder
    repeat?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicineAssignmentSumOrderByAggregateInput = {
    durationDays?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAdministrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationStatus | EnumAdministrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdministrationStatusFilter<$PrismaModel> | $Enums.AdministrationStatus
  }

  export type MedicineAssignmentScalarRelationFilter = {
    is?: MedicineAssignmentWhereInput
    isNot?: MedicineAssignmentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdministrationLogCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    patientId?: SortOrder
    staffId?: SortOrder
    scheduledTime?: SortOrder
    administeredAt?: SortOrder
    status?: SortOrder
    skipReason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministrationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    patientId?: SortOrder
    staffId?: SortOrder
    scheduledTime?: SortOrder
    administeredAt?: SortOrder
    status?: SortOrder
    skipReason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministrationLogMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    patientId?: SortOrder
    staffId?: SortOrder
    scheduledTime?: SortOrder
    administeredAt?: SortOrder
    status?: SortOrder
    skipReason?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAdministrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationStatus | EnumAdministrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdministrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdministrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdministrationStatusFilter<$PrismaModel>
    _max?: NestedEnumAdministrationStatusFilter<$PrismaModel>
  }

  export type AdministrationLogCreateNestedManyWithoutStaffInput = {
    create?: XOR<AdministrationLogCreateWithoutStaffInput, AdministrationLogUncheckedCreateWithoutStaffInput> | AdministrationLogCreateWithoutStaffInput[] | AdministrationLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutStaffInput | AdministrationLogCreateOrConnectWithoutStaffInput[]
    createMany?: AdministrationLogCreateManyStaffInputEnvelope
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
  }

  export type AdministrationLogUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<AdministrationLogCreateWithoutStaffInput, AdministrationLogUncheckedCreateWithoutStaffInput> | AdministrationLogCreateWithoutStaffInput[] | AdministrationLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutStaffInput | AdministrationLogCreateOrConnectWithoutStaffInput[]
    createMany?: AdministrationLogCreateManyStaffInputEnvelope
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdministrationLogUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AdministrationLogCreateWithoutStaffInput, AdministrationLogUncheckedCreateWithoutStaffInput> | AdministrationLogCreateWithoutStaffInput[] | AdministrationLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutStaffInput | AdministrationLogCreateOrConnectWithoutStaffInput[]
    upsert?: AdministrationLogUpsertWithWhereUniqueWithoutStaffInput | AdministrationLogUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AdministrationLogCreateManyStaffInputEnvelope
    set?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    disconnect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    delete?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    update?: AdministrationLogUpdateWithWhereUniqueWithoutStaffInput | AdministrationLogUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AdministrationLogUpdateManyWithWhereWithoutStaffInput | AdministrationLogUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
  }

  export type AdministrationLogUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<AdministrationLogCreateWithoutStaffInput, AdministrationLogUncheckedCreateWithoutStaffInput> | AdministrationLogCreateWithoutStaffInput[] | AdministrationLogUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutStaffInput | AdministrationLogCreateOrConnectWithoutStaffInput[]
    upsert?: AdministrationLogUpsertWithWhereUniqueWithoutStaffInput | AdministrationLogUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: AdministrationLogCreateManyStaffInputEnvelope
    set?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    disconnect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    delete?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    update?: AdministrationLogUpdateWithWhereUniqueWithoutStaffInput | AdministrationLogUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: AdministrationLogUpdateManyWithWhereWithoutStaffInput | AdministrationLogUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<RoomCreateWithoutDepartmentInput, RoomUncheckedCreateWithoutDepartmentInput> | RoomCreateWithoutDepartmentInput[] | RoomUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDepartmentInput | RoomCreateOrConnectWithoutDepartmentInput[]
    createMany?: RoomCreateManyDepartmentInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<RoomCreateWithoutDepartmentInput, RoomUncheckedCreateWithoutDepartmentInput> | RoomCreateWithoutDepartmentInput[] | RoomUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDepartmentInput | RoomCreateOrConnectWithoutDepartmentInput[]
    createMany?: RoomCreateManyDepartmentInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type EnumDepartmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.DepartmentStatus
  }

  export type RoomUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<RoomCreateWithoutDepartmentInput, RoomUncheckedCreateWithoutDepartmentInput> | RoomCreateWithoutDepartmentInput[] | RoomUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDepartmentInput | RoomCreateOrConnectWithoutDepartmentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutDepartmentInput | RoomUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: RoomCreateManyDepartmentInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutDepartmentInput | RoomUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutDepartmentInput | RoomUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDepartmentInput | PatientUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDepartmentInput | PatientUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDepartmentInput | PatientUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<RoomCreateWithoutDepartmentInput, RoomUncheckedCreateWithoutDepartmentInput> | RoomCreateWithoutDepartmentInput[] | RoomUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutDepartmentInput | RoomCreateOrConnectWithoutDepartmentInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutDepartmentInput | RoomUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: RoomCreateManyDepartmentInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutDepartmentInput | RoomUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutDepartmentInput | RoomUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDepartmentInput | PatientUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDepartmentInput | PatientUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDepartmentInput | PatientUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutRoomsInput = {
    create?: XOR<DepartmentCreateWithoutRoomsInput, DepartmentUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutRoomsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type DepartmentUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<DepartmentCreateWithoutRoomsInput, DepartmentUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutRoomsInput
    upsert?: DepartmentUpsertWithoutRoomsInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutRoomsInput, DepartmentUpdateWithoutRoomsInput>, DepartmentUncheckedUpdateWithoutRoomsInput>
  }

  export type PatientCreateallergiesInput = {
    set: string[]
  }

  export type DepartmentCreateNestedOneWithoutPatientsInput = {
    create?: XOR<DepartmentCreateWithoutPatientsInput, DepartmentUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutPatientsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type BoxCreateNestedOneWithoutPatientsInput = {
    create?: XOR<BoxCreateWithoutPatientsInput, BoxUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: BoxCreateOrConnectWithoutPatientsInput
    connect?: BoxWhereUniqueInput
  }

  export type MedicineAssignmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicineAssignmentCreateWithoutPatientInput, MedicineAssignmentUncheckedCreateWithoutPatientInput> | MedicineAssignmentCreateWithoutPatientInput[] | MedicineAssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutPatientInput | MedicineAssignmentCreateOrConnectWithoutPatientInput[]
    createMany?: MedicineAssignmentCreateManyPatientInputEnvelope
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
  }

  export type AdministrationLogCreateNestedManyWithoutPatientInput = {
    create?: XOR<AdministrationLogCreateWithoutPatientInput, AdministrationLogUncheckedCreateWithoutPatientInput> | AdministrationLogCreateWithoutPatientInput[] | AdministrationLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutPatientInput | AdministrationLogCreateOrConnectWithoutPatientInput[]
    createMany?: AdministrationLogCreateManyPatientInputEnvelope
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
  }

  export type MedicineAssignmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<MedicineAssignmentCreateWithoutPatientInput, MedicineAssignmentUncheckedCreateWithoutPatientInput> | MedicineAssignmentCreateWithoutPatientInput[] | MedicineAssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutPatientInput | MedicineAssignmentCreateOrConnectWithoutPatientInput[]
    createMany?: MedicineAssignmentCreateManyPatientInputEnvelope
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
  }

  export type AdministrationLogUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<AdministrationLogCreateWithoutPatientInput, AdministrationLogUncheckedCreateWithoutPatientInput> | AdministrationLogCreateWithoutPatientInput[] | AdministrationLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutPatientInput | AdministrationLogCreateOrConnectWithoutPatientInput[]
    createMany?: AdministrationLogCreateManyPatientInputEnvelope
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PatientUpdateallergiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumPatientStatusFieldUpdateOperationsInput = {
    set?: $Enums.PatientStatus
  }

  export type DepartmentUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<DepartmentCreateWithoutPatientsInput, DepartmentUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutPatientsInput
    upsert?: DepartmentUpsertWithoutPatientsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutPatientsInput, DepartmentUpdateWithoutPatientsInput>, DepartmentUncheckedUpdateWithoutPatientsInput>
  }

  export type BoxUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<BoxCreateWithoutPatientsInput, BoxUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: BoxCreateOrConnectWithoutPatientsInput
    upsert?: BoxUpsertWithoutPatientsInput
    disconnect?: BoxWhereInput | boolean
    delete?: BoxWhereInput | boolean
    connect?: BoxWhereUniqueInput
    update?: XOR<XOR<BoxUpdateToOneWithWhereWithoutPatientsInput, BoxUpdateWithoutPatientsInput>, BoxUncheckedUpdateWithoutPatientsInput>
  }

  export type MedicineAssignmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutPatientInput, MedicineAssignmentUncheckedCreateWithoutPatientInput> | MedicineAssignmentCreateWithoutPatientInput[] | MedicineAssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutPatientInput | MedicineAssignmentCreateOrConnectWithoutPatientInput[]
    upsert?: MedicineAssignmentUpsertWithWhereUniqueWithoutPatientInput | MedicineAssignmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicineAssignmentCreateManyPatientInputEnvelope
    set?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    disconnect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    delete?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    update?: MedicineAssignmentUpdateWithWhereUniqueWithoutPatientInput | MedicineAssignmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicineAssignmentUpdateManyWithWhereWithoutPatientInput | MedicineAssignmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
  }

  export type AdministrationLogUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AdministrationLogCreateWithoutPatientInput, AdministrationLogUncheckedCreateWithoutPatientInput> | AdministrationLogCreateWithoutPatientInput[] | AdministrationLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutPatientInput | AdministrationLogCreateOrConnectWithoutPatientInput[]
    upsert?: AdministrationLogUpsertWithWhereUniqueWithoutPatientInput | AdministrationLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AdministrationLogCreateManyPatientInputEnvelope
    set?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    disconnect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    delete?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    update?: AdministrationLogUpdateWithWhereUniqueWithoutPatientInput | AdministrationLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AdministrationLogUpdateManyWithWhereWithoutPatientInput | AdministrationLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
  }

  export type MedicineAssignmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutPatientInput, MedicineAssignmentUncheckedCreateWithoutPatientInput> | MedicineAssignmentCreateWithoutPatientInput[] | MedicineAssignmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutPatientInput | MedicineAssignmentCreateOrConnectWithoutPatientInput[]
    upsert?: MedicineAssignmentUpsertWithWhereUniqueWithoutPatientInput | MedicineAssignmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: MedicineAssignmentCreateManyPatientInputEnvelope
    set?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    disconnect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    delete?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    update?: MedicineAssignmentUpdateWithWhereUniqueWithoutPatientInput | MedicineAssignmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: MedicineAssignmentUpdateManyWithWhereWithoutPatientInput | MedicineAssignmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
  }

  export type AdministrationLogUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<AdministrationLogCreateWithoutPatientInput, AdministrationLogUncheckedCreateWithoutPatientInput> | AdministrationLogCreateWithoutPatientInput[] | AdministrationLogUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutPatientInput | AdministrationLogCreateOrConnectWithoutPatientInput[]
    upsert?: AdministrationLogUpsertWithWhereUniqueWithoutPatientInput | AdministrationLogUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: AdministrationLogCreateManyPatientInputEnvelope
    set?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    disconnect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    delete?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    update?: AdministrationLogUpdateWithWhereUniqueWithoutPatientInput | AdministrationLogUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: AdministrationLogUpdateManyWithWhereWithoutPatientInput | AdministrationLogUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
  }

  export type MedicineAssignmentCreateNestedManyWithoutMedicineInput = {
    create?: XOR<MedicineAssignmentCreateWithoutMedicineInput, MedicineAssignmentUncheckedCreateWithoutMedicineInput> | MedicineAssignmentCreateWithoutMedicineInput[] | MedicineAssignmentUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutMedicineInput | MedicineAssignmentCreateOrConnectWithoutMedicineInput[]
    createMany?: MedicineAssignmentCreateManyMedicineInputEnvelope
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
  }

  export type MedicineAssignmentUncheckedCreateNestedManyWithoutMedicineInput = {
    create?: XOR<MedicineAssignmentCreateWithoutMedicineInput, MedicineAssignmentUncheckedCreateWithoutMedicineInput> | MedicineAssignmentCreateWithoutMedicineInput[] | MedicineAssignmentUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutMedicineInput | MedicineAssignmentCreateOrConnectWithoutMedicineInput[]
    createMany?: MedicineAssignmentCreateManyMedicineInputEnvelope
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
  }

  export type EnumMedicineTypeFieldUpdateOperationsInput = {
    set?: $Enums.MedicineType
  }

  export type MedicineAssignmentUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutMedicineInput, MedicineAssignmentUncheckedCreateWithoutMedicineInput> | MedicineAssignmentCreateWithoutMedicineInput[] | MedicineAssignmentUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutMedicineInput | MedicineAssignmentCreateOrConnectWithoutMedicineInput[]
    upsert?: MedicineAssignmentUpsertWithWhereUniqueWithoutMedicineInput | MedicineAssignmentUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: MedicineAssignmentCreateManyMedicineInputEnvelope
    set?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    disconnect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    delete?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    update?: MedicineAssignmentUpdateWithWhereUniqueWithoutMedicineInput | MedicineAssignmentUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: MedicineAssignmentUpdateManyWithWhereWithoutMedicineInput | MedicineAssignmentUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
  }

  export type MedicineAssignmentUncheckedUpdateManyWithoutMedicineNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutMedicineInput, MedicineAssignmentUncheckedCreateWithoutMedicineInput> | MedicineAssignmentCreateWithoutMedicineInput[] | MedicineAssignmentUncheckedCreateWithoutMedicineInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutMedicineInput | MedicineAssignmentCreateOrConnectWithoutMedicineInput[]
    upsert?: MedicineAssignmentUpsertWithWhereUniqueWithoutMedicineInput | MedicineAssignmentUpsertWithWhereUniqueWithoutMedicineInput[]
    createMany?: MedicineAssignmentCreateManyMedicineInputEnvelope
    set?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    disconnect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    delete?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    update?: MedicineAssignmentUpdateWithWhereUniqueWithoutMedicineInput | MedicineAssignmentUpdateWithWhereUniqueWithoutMedicineInput[]
    updateMany?: MedicineAssignmentUpdateManyWithWhereWithoutMedicineInput | MedicineAssignmentUpdateManyWithWhereWithoutMedicineInput[]
    deleteMany?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
  }

  export type PatientCreateNestedManyWithoutBoxInput = {
    create?: XOR<PatientCreateWithoutBoxInput, PatientUncheckedCreateWithoutBoxInput> | PatientCreateWithoutBoxInput[] | PatientUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBoxInput | PatientCreateOrConnectWithoutBoxInput[]
    createMany?: PatientCreateManyBoxInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type MedicineAssignmentCreateNestedManyWithoutBoxInput = {
    create?: XOR<MedicineAssignmentCreateWithoutBoxInput, MedicineAssignmentUncheckedCreateWithoutBoxInput> | MedicineAssignmentCreateWithoutBoxInput[] | MedicineAssignmentUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutBoxInput | MedicineAssignmentCreateOrConnectWithoutBoxInput[]
    createMany?: MedicineAssignmentCreateManyBoxInputEnvelope
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutBoxInput = {
    create?: XOR<PatientCreateWithoutBoxInput, PatientUncheckedCreateWithoutBoxInput> | PatientCreateWithoutBoxInput[] | PatientUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBoxInput | PatientCreateOrConnectWithoutBoxInput[]
    createMany?: PatientCreateManyBoxInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type MedicineAssignmentUncheckedCreateNestedManyWithoutBoxInput = {
    create?: XOR<MedicineAssignmentCreateWithoutBoxInput, MedicineAssignmentUncheckedCreateWithoutBoxInput> | MedicineAssignmentCreateWithoutBoxInput[] | MedicineAssignmentUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutBoxInput | MedicineAssignmentCreateOrConnectWithoutBoxInput[]
    createMany?: MedicineAssignmentCreateManyBoxInputEnvelope
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
  }

  export type EnumBoxStatusFieldUpdateOperationsInput = {
    set?: $Enums.BoxStatus
  }

  export type PatientUpdateManyWithoutBoxNestedInput = {
    create?: XOR<PatientCreateWithoutBoxInput, PatientUncheckedCreateWithoutBoxInput> | PatientCreateWithoutBoxInput[] | PatientUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBoxInput | PatientCreateOrConnectWithoutBoxInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutBoxInput | PatientUpsertWithWhereUniqueWithoutBoxInput[]
    createMany?: PatientCreateManyBoxInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutBoxInput | PatientUpdateWithWhereUniqueWithoutBoxInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutBoxInput | PatientUpdateManyWithWhereWithoutBoxInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type MedicineAssignmentUpdateManyWithoutBoxNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutBoxInput, MedicineAssignmentUncheckedCreateWithoutBoxInput> | MedicineAssignmentCreateWithoutBoxInput[] | MedicineAssignmentUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutBoxInput | MedicineAssignmentCreateOrConnectWithoutBoxInput[]
    upsert?: MedicineAssignmentUpsertWithWhereUniqueWithoutBoxInput | MedicineAssignmentUpsertWithWhereUniqueWithoutBoxInput[]
    createMany?: MedicineAssignmentCreateManyBoxInputEnvelope
    set?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    disconnect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    delete?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    update?: MedicineAssignmentUpdateWithWhereUniqueWithoutBoxInput | MedicineAssignmentUpdateWithWhereUniqueWithoutBoxInput[]
    updateMany?: MedicineAssignmentUpdateManyWithWhereWithoutBoxInput | MedicineAssignmentUpdateManyWithWhereWithoutBoxInput[]
    deleteMany?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutBoxNestedInput = {
    create?: XOR<PatientCreateWithoutBoxInput, PatientUncheckedCreateWithoutBoxInput> | PatientCreateWithoutBoxInput[] | PatientUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBoxInput | PatientCreateOrConnectWithoutBoxInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutBoxInput | PatientUpsertWithWhereUniqueWithoutBoxInput[]
    createMany?: PatientCreateManyBoxInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutBoxInput | PatientUpdateWithWhereUniqueWithoutBoxInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutBoxInput | PatientUpdateManyWithWhereWithoutBoxInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type MedicineAssignmentUncheckedUpdateManyWithoutBoxNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutBoxInput, MedicineAssignmentUncheckedCreateWithoutBoxInput> | MedicineAssignmentCreateWithoutBoxInput[] | MedicineAssignmentUncheckedCreateWithoutBoxInput[]
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutBoxInput | MedicineAssignmentCreateOrConnectWithoutBoxInput[]
    upsert?: MedicineAssignmentUpsertWithWhereUniqueWithoutBoxInput | MedicineAssignmentUpsertWithWhereUniqueWithoutBoxInput[]
    createMany?: MedicineAssignmentCreateManyBoxInputEnvelope
    set?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    disconnect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    delete?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    connect?: MedicineAssignmentWhereUniqueInput | MedicineAssignmentWhereUniqueInput[]
    update?: MedicineAssignmentUpdateWithWhereUniqueWithoutBoxInput | MedicineAssignmentUpdateWithWhereUniqueWithoutBoxInput[]
    updateMany?: MedicineAssignmentUpdateManyWithWhereWithoutBoxInput | MedicineAssignmentUpdateManyWithWhereWithoutBoxInput[]
    deleteMany?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
  }

  export type MedicineAssignmentCreatescheduleTimesInput = {
    set: string[]
  }

  export type PatientCreateNestedOneWithoutMedicineAssignmentsInput = {
    create?: XOR<PatientCreateWithoutMedicineAssignmentsInput, PatientUncheckedCreateWithoutMedicineAssignmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicineAssignmentsInput
    connect?: PatientWhereUniqueInput
  }

  export type BoxCreateNestedOneWithoutMedicineAssignmentsInput = {
    create?: XOR<BoxCreateWithoutMedicineAssignmentsInput, BoxUncheckedCreateWithoutMedicineAssignmentsInput>
    connectOrCreate?: BoxCreateOrConnectWithoutMedicineAssignmentsInput
    connect?: BoxWhereUniqueInput
  }

  export type MedicineCreateNestedOneWithoutMedicineAssignmentsInput = {
    create?: XOR<MedicineCreateWithoutMedicineAssignmentsInput, MedicineUncheckedCreateWithoutMedicineAssignmentsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutMedicineAssignmentsInput
    connect?: MedicineWhereUniqueInput
  }

  export type AdministrationLogCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AdministrationLogCreateWithoutAssignmentInput, AdministrationLogUncheckedCreateWithoutAssignmentInput> | AdministrationLogCreateWithoutAssignmentInput[] | AdministrationLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutAssignmentInput | AdministrationLogCreateOrConnectWithoutAssignmentInput[]
    createMany?: AdministrationLogCreateManyAssignmentInputEnvelope
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
  }

  export type AdministrationLogUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<AdministrationLogCreateWithoutAssignmentInput, AdministrationLogUncheckedCreateWithoutAssignmentInput> | AdministrationLogCreateWithoutAssignmentInput[] | AdministrationLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutAssignmentInput | AdministrationLogCreateOrConnectWithoutAssignmentInput[]
    createMany?: AdministrationLogCreateManyAssignmentInputEnvelope
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
  }

  export type MedicineAssignmentUpdatescheduleTimesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type PatientUpdateOneRequiredWithoutMedicineAssignmentsNestedInput = {
    create?: XOR<PatientCreateWithoutMedicineAssignmentsInput, PatientUncheckedCreateWithoutMedicineAssignmentsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutMedicineAssignmentsInput
    upsert?: PatientUpsertWithoutMedicineAssignmentsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutMedicineAssignmentsInput, PatientUpdateWithoutMedicineAssignmentsInput>, PatientUncheckedUpdateWithoutMedicineAssignmentsInput>
  }

  export type BoxUpdateOneWithoutMedicineAssignmentsNestedInput = {
    create?: XOR<BoxCreateWithoutMedicineAssignmentsInput, BoxUncheckedCreateWithoutMedicineAssignmentsInput>
    connectOrCreate?: BoxCreateOrConnectWithoutMedicineAssignmentsInput
    upsert?: BoxUpsertWithoutMedicineAssignmentsInput
    disconnect?: BoxWhereInput | boolean
    delete?: BoxWhereInput | boolean
    connect?: BoxWhereUniqueInput
    update?: XOR<XOR<BoxUpdateToOneWithWhereWithoutMedicineAssignmentsInput, BoxUpdateWithoutMedicineAssignmentsInput>, BoxUncheckedUpdateWithoutMedicineAssignmentsInput>
  }

  export type MedicineUpdateOneRequiredWithoutMedicineAssignmentsNestedInput = {
    create?: XOR<MedicineCreateWithoutMedicineAssignmentsInput, MedicineUncheckedCreateWithoutMedicineAssignmentsInput>
    connectOrCreate?: MedicineCreateOrConnectWithoutMedicineAssignmentsInput
    upsert?: MedicineUpsertWithoutMedicineAssignmentsInput
    connect?: MedicineWhereUniqueInput
    update?: XOR<XOR<MedicineUpdateToOneWithWhereWithoutMedicineAssignmentsInput, MedicineUpdateWithoutMedicineAssignmentsInput>, MedicineUncheckedUpdateWithoutMedicineAssignmentsInput>
  }

  export type AdministrationLogUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AdministrationLogCreateWithoutAssignmentInput, AdministrationLogUncheckedCreateWithoutAssignmentInput> | AdministrationLogCreateWithoutAssignmentInput[] | AdministrationLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutAssignmentInput | AdministrationLogCreateOrConnectWithoutAssignmentInput[]
    upsert?: AdministrationLogUpsertWithWhereUniqueWithoutAssignmentInput | AdministrationLogUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AdministrationLogCreateManyAssignmentInputEnvelope
    set?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    disconnect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    delete?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    update?: AdministrationLogUpdateWithWhereUniqueWithoutAssignmentInput | AdministrationLogUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AdministrationLogUpdateManyWithWhereWithoutAssignmentInput | AdministrationLogUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
  }

  export type AdministrationLogUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<AdministrationLogCreateWithoutAssignmentInput, AdministrationLogUncheckedCreateWithoutAssignmentInput> | AdministrationLogCreateWithoutAssignmentInput[] | AdministrationLogUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: AdministrationLogCreateOrConnectWithoutAssignmentInput | AdministrationLogCreateOrConnectWithoutAssignmentInput[]
    upsert?: AdministrationLogUpsertWithWhereUniqueWithoutAssignmentInput | AdministrationLogUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: AdministrationLogCreateManyAssignmentInputEnvelope
    set?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    disconnect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    delete?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    connect?: AdministrationLogWhereUniqueInput | AdministrationLogWhereUniqueInput[]
    update?: AdministrationLogUpdateWithWhereUniqueWithoutAssignmentInput | AdministrationLogUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: AdministrationLogUpdateManyWithWhereWithoutAssignmentInput | AdministrationLogUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
  }

  export type MedicineAssignmentCreateNestedOneWithoutAdministrationLogsInput = {
    create?: XOR<MedicineAssignmentCreateWithoutAdministrationLogsInput, MedicineAssignmentUncheckedCreateWithoutAdministrationLogsInput>
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutAdministrationLogsInput
    connect?: MedicineAssignmentWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutAdministrationLogsInput = {
    create?: XOR<PatientCreateWithoutAdministrationLogsInput, PatientUncheckedCreateWithoutAdministrationLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAdministrationLogsInput
    connect?: PatientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAdministrationLogsInput = {
    create?: XOR<UserCreateWithoutAdministrationLogsInput, UserUncheckedCreateWithoutAdministrationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdministrationLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAdministrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdministrationStatus
  }

  export type MedicineAssignmentUpdateOneRequiredWithoutAdministrationLogsNestedInput = {
    create?: XOR<MedicineAssignmentCreateWithoutAdministrationLogsInput, MedicineAssignmentUncheckedCreateWithoutAdministrationLogsInput>
    connectOrCreate?: MedicineAssignmentCreateOrConnectWithoutAdministrationLogsInput
    upsert?: MedicineAssignmentUpsertWithoutAdministrationLogsInput
    connect?: MedicineAssignmentWhereUniqueInput
    update?: XOR<XOR<MedicineAssignmentUpdateToOneWithWhereWithoutAdministrationLogsInput, MedicineAssignmentUpdateWithoutAdministrationLogsInput>, MedicineAssignmentUncheckedUpdateWithoutAdministrationLogsInput>
  }

  export type PatientUpdateOneRequiredWithoutAdministrationLogsNestedInput = {
    create?: XOR<PatientCreateWithoutAdministrationLogsInput, PatientUncheckedCreateWithoutAdministrationLogsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutAdministrationLogsInput
    upsert?: PatientUpsertWithoutAdministrationLogsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutAdministrationLogsInput, PatientUpdateWithoutAdministrationLogsInput>, PatientUncheckedUpdateWithoutAdministrationLogsInput>
  }

  export type UserUpdateOneRequiredWithoutAdministrationLogsNestedInput = {
    create?: XOR<UserCreateWithoutAdministrationLogsInput, UserUncheckedCreateWithoutAdministrationLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdministrationLogsInput
    upsert?: UserUpsertWithoutAdministrationLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdministrationLogsInput, UserUpdateWithoutAdministrationLogsInput>, UserUncheckedUpdateWithoutAdministrationLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDepartmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DepartmentStatus | EnumDepartmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentStatusFilter<$PrismaModel> | $Enums.DepartmentStatus
  }

  export type NestedEnumDepartmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DepartmentStatus | EnumDepartmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DepartmentStatus[] | ListEnumDepartmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDepartmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.DepartmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDepartmentStatusFilter<$PrismaModel>
    _max?: NestedEnumDepartmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoomStatus[] | ListEnumRoomStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumPatientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusFilter<$PrismaModel> | $Enums.PatientStatus
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PatientStatus[] | ListEnumPatientStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusFilter<$PrismaModel>
  }

  export type NestedEnumMedicineTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicineType | EnumMedicineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicineTypeFilter<$PrismaModel> | $Enums.MedicineType
  }

  export type NestedEnumMedicineTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicineType | EnumMedicineTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicineType[] | ListEnumMedicineTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicineTypeWithAggregatesFilter<$PrismaModel> | $Enums.MedicineType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedicineTypeFilter<$PrismaModel>
    _max?: NestedEnumMedicineTypeFilter<$PrismaModel>
  }

  export type NestedEnumBoxStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BoxStatus | EnumBoxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBoxStatusFilter<$PrismaModel> | $Enums.BoxStatus
  }

  export type NestedEnumBoxStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoxStatus | EnumBoxStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BoxStatus[] | ListEnumBoxStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBoxStatusWithAggregatesFilter<$PrismaModel> | $Enums.BoxStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBoxStatusFilter<$PrismaModel>
    _max?: NestedEnumBoxStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAdministrationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationStatus | EnumAdministrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdministrationStatusFilter<$PrismaModel> | $Enums.AdministrationStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAdministrationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdministrationStatus | EnumAdministrationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdministrationStatus[] | ListEnumAdministrationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdministrationStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdministrationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdministrationStatusFilter<$PrismaModel>
    _max?: NestedEnumAdministrationStatusFilter<$PrismaModel>
  }

  export type AdministrationLogCreateWithoutStaffInput = {
    id?: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: MedicineAssignmentCreateNestedOneWithoutAdministrationLogsInput
    patient: PatientCreateNestedOneWithoutAdministrationLogsInput
  }

  export type AdministrationLogUncheckedCreateWithoutStaffInput = {
    id?: string
    assignmentId: string
    patientId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogCreateOrConnectWithoutStaffInput = {
    where: AdministrationLogWhereUniqueInput
    create: XOR<AdministrationLogCreateWithoutStaffInput, AdministrationLogUncheckedCreateWithoutStaffInput>
  }

  export type AdministrationLogCreateManyStaffInputEnvelope = {
    data: AdministrationLogCreateManyStaffInput | AdministrationLogCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type AdministrationLogUpsertWithWhereUniqueWithoutStaffInput = {
    where: AdministrationLogWhereUniqueInput
    update: XOR<AdministrationLogUpdateWithoutStaffInput, AdministrationLogUncheckedUpdateWithoutStaffInput>
    create: XOR<AdministrationLogCreateWithoutStaffInput, AdministrationLogUncheckedCreateWithoutStaffInput>
  }

  export type AdministrationLogUpdateWithWhereUniqueWithoutStaffInput = {
    where: AdministrationLogWhereUniqueInput
    data: XOR<AdministrationLogUpdateWithoutStaffInput, AdministrationLogUncheckedUpdateWithoutStaffInput>
  }

  export type AdministrationLogUpdateManyWithWhereWithoutStaffInput = {
    where: AdministrationLogScalarWhereInput
    data: XOR<AdministrationLogUpdateManyMutationInput, AdministrationLogUncheckedUpdateManyWithoutStaffInput>
  }

  export type AdministrationLogScalarWhereInput = {
    AND?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
    OR?: AdministrationLogScalarWhereInput[]
    NOT?: AdministrationLogScalarWhereInput | AdministrationLogScalarWhereInput[]
    id?: StringFilter<"AdministrationLog"> | string
    assignmentId?: StringFilter<"AdministrationLog"> | string
    patientId?: StringFilter<"AdministrationLog"> | string
    staffId?: StringFilter<"AdministrationLog"> | string
    scheduledTime?: DateTimeFilter<"AdministrationLog"> | Date | string
    administeredAt?: DateTimeNullableFilter<"AdministrationLog"> | Date | string | null
    status?: EnumAdministrationStatusFilter<"AdministrationLog"> | $Enums.AdministrationStatus
    skipReason?: StringNullableFilter<"AdministrationLog"> | string | null
    notes?: StringNullableFilter<"AdministrationLog"> | string | null
    createdAt?: DateTimeFilter<"AdministrationLog"> | Date | string
    updatedAt?: DateTimeFilter<"AdministrationLog"> | Date | string
  }

  export type RoomCreateWithoutDepartmentInput = {
    id?: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUncheckedCreateWithoutDepartmentInput = {
    id?: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateOrConnectWithoutDepartmentInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutDepartmentInput, RoomUncheckedCreateWithoutDepartmentInput>
  }

  export type RoomCreateManyDepartmentInputEnvelope = {
    data: RoomCreateManyDepartmentInput | RoomCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutDepartmentInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    box?: BoxCreateNestedOneWithoutPatientsInput
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutPatientInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    boxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutPatientInput
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDepartmentInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput>
  }

  export type PatientCreateManyDepartmentInputEnvelope = {
    data: PatientCreateManyDepartmentInput | PatientCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutDepartmentInput, RoomUncheckedUpdateWithoutDepartmentInput>
    create: XOR<RoomCreateWithoutDepartmentInput, RoomUncheckedCreateWithoutDepartmentInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutDepartmentInput, RoomUncheckedUpdateWithoutDepartmentInput>
  }

  export type RoomUpdateManyWithWhereWithoutDepartmentInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    roomNumber?: StringFilter<"Room"> | string
    capacity?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    departmentId?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutDepartmentInput, PatientUncheckedUpdateWithoutDepartmentInput>
    create: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutDepartmentInput, PatientUncheckedUpdateWithoutDepartmentInput>
  }

  export type PatientUpdateManyWithWhereWithoutDepartmentInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    age?: IntFilter<"Patient"> | number
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    nationalId?: StringFilter<"Patient"> | string
    departmentId?: StringNullableFilter<"Patient"> | string | null
    room?: StringNullableFilter<"Patient"> | string | null
    allergies?: StringNullableListFilter<"Patient">
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    notes?: StringNullableFilter<"Patient"> | string | null
    boxId?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type DepartmentCreateWithoutRoomsInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutRoomsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutRoomsInput, DepartmentUncheckedCreateWithoutRoomsInput>
  }

  export type DepartmentUpsertWithoutRoomsInput = {
    update: XOR<DepartmentUpdateWithoutRoomsInput, DepartmentUncheckedUpdateWithoutRoomsInput>
    create: XOR<DepartmentCreateWithoutRoomsInput, DepartmentUncheckedCreateWithoutRoomsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutRoomsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutRoomsInput, DepartmentUncheckedUpdateWithoutRoomsInput>
  }

  export type DepartmentUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutRoomsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateWithoutPatientsInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    description: string
    head: string
    status: $Enums.DepartmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutPatientsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutPatientsInput, DepartmentUncheckedCreateWithoutPatientsInput>
  }

  export type BoxCreateWithoutPatientsInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateWithoutPatientsInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxCreateOrConnectWithoutPatientsInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutPatientsInput, BoxUncheckedCreateWithoutPatientsInput>
  }

  export type MedicineAssignmentCreateWithoutPatientInput = {
    id?: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    box?: BoxCreateNestedOneWithoutMedicineAssignmentsInput
    medicine: MedicineCreateNestedOneWithoutMedicineAssignmentsInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentUncheckedCreateWithoutPatientInput = {
    id?: string
    boxId?: string | null
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentCreateOrConnectWithoutPatientInput = {
    where: MedicineAssignmentWhereUniqueInput
    create: XOR<MedicineAssignmentCreateWithoutPatientInput, MedicineAssignmentUncheckedCreateWithoutPatientInput>
  }

  export type MedicineAssignmentCreateManyPatientInputEnvelope = {
    data: MedicineAssignmentCreateManyPatientInput | MedicineAssignmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AdministrationLogCreateWithoutPatientInput = {
    id?: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: MedicineAssignmentCreateNestedOneWithoutAdministrationLogsInput
    staff: UserCreateNestedOneWithoutAdministrationLogsInput
  }

  export type AdministrationLogUncheckedCreateWithoutPatientInput = {
    id?: string
    assignmentId: string
    staffId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogCreateOrConnectWithoutPatientInput = {
    where: AdministrationLogWhereUniqueInput
    create: XOR<AdministrationLogCreateWithoutPatientInput, AdministrationLogUncheckedCreateWithoutPatientInput>
  }

  export type AdministrationLogCreateManyPatientInputEnvelope = {
    data: AdministrationLogCreateManyPatientInput | AdministrationLogCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutPatientsInput = {
    update: XOR<DepartmentUpdateWithoutPatientsInput, DepartmentUncheckedUpdateWithoutPatientsInput>
    create: XOR<DepartmentCreateWithoutPatientsInput, DepartmentUncheckedCreateWithoutPatientsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutPatientsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutPatientsInput, DepartmentUncheckedUpdateWithoutPatientsInput>
  }

  export type DepartmentUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    head?: StringFieldUpdateOperationsInput | string
    status?: EnumDepartmentStatusFieldUpdateOperationsInput | $Enums.DepartmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type BoxUpsertWithoutPatientsInput = {
    update: XOR<BoxUpdateWithoutPatientsInput, BoxUncheckedUpdateWithoutPatientsInput>
    create: XOR<BoxCreateWithoutPatientsInput, BoxUncheckedCreateWithoutPatientsInput>
    where?: BoxWhereInput
  }

  export type BoxUpdateToOneWithWhereWithoutPatientsInput = {
    where?: BoxWhereInput
    data: XOR<BoxUpdateWithoutPatientsInput, BoxUncheckedUpdateWithoutPatientsInput>
  }

  export type BoxUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type MedicineAssignmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: MedicineAssignmentWhereUniqueInput
    update: XOR<MedicineAssignmentUpdateWithoutPatientInput, MedicineAssignmentUncheckedUpdateWithoutPatientInput>
    create: XOR<MedicineAssignmentCreateWithoutPatientInput, MedicineAssignmentUncheckedCreateWithoutPatientInput>
  }

  export type MedicineAssignmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: MedicineAssignmentWhereUniqueInput
    data: XOR<MedicineAssignmentUpdateWithoutPatientInput, MedicineAssignmentUncheckedUpdateWithoutPatientInput>
  }

  export type MedicineAssignmentUpdateManyWithWhereWithoutPatientInput = {
    where: MedicineAssignmentScalarWhereInput
    data: XOR<MedicineAssignmentUpdateManyMutationInput, MedicineAssignmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicineAssignmentScalarWhereInput = {
    AND?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
    OR?: MedicineAssignmentScalarWhereInput[]
    NOT?: MedicineAssignmentScalarWhereInput | MedicineAssignmentScalarWhereInput[]
    id?: StringFilter<"MedicineAssignment"> | string
    patientId?: StringFilter<"MedicineAssignment"> | string
    boxId?: StringNullableFilter<"MedicineAssignment"> | string | null
    medicineId?: StringFilter<"MedicineAssignment"> | string
    dosage?: StringFilter<"MedicineAssignment"> | string
    administrationMethodOverride?: StringNullableFilter<"MedicineAssignment"> | string | null
    scheduleTimes?: StringNullableListFilter<"MedicineAssignment">
    startDate?: DateTimeFilter<"MedicineAssignment"> | Date | string
    durationDays?: IntFilter<"MedicineAssignment"> | number
    endDate?: DateTimeFilter<"MedicineAssignment"> | Date | string
    repeat?: BoolFilter<"MedicineAssignment"> | boolean
    status?: EnumAssignmentStatusFilter<"MedicineAssignment"> | $Enums.AssignmentStatus
    notes?: StringNullableFilter<"MedicineAssignment"> | string | null
    createdAt?: DateTimeFilter<"MedicineAssignment"> | Date | string
    updatedAt?: DateTimeFilter<"MedicineAssignment"> | Date | string
  }

  export type AdministrationLogUpsertWithWhereUniqueWithoutPatientInput = {
    where: AdministrationLogWhereUniqueInput
    update: XOR<AdministrationLogUpdateWithoutPatientInput, AdministrationLogUncheckedUpdateWithoutPatientInput>
    create: XOR<AdministrationLogCreateWithoutPatientInput, AdministrationLogUncheckedCreateWithoutPatientInput>
  }

  export type AdministrationLogUpdateWithWhereUniqueWithoutPatientInput = {
    where: AdministrationLogWhereUniqueInput
    data: XOR<AdministrationLogUpdateWithoutPatientInput, AdministrationLogUncheckedUpdateWithoutPatientInput>
  }

  export type AdministrationLogUpdateManyWithWhereWithoutPatientInput = {
    where: AdministrationLogScalarWhereInput
    data: XOR<AdministrationLogUpdateManyMutationInput, AdministrationLogUncheckedUpdateManyWithoutPatientInput>
  }

  export type MedicineAssignmentCreateWithoutMedicineInput = {
    id?: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicineAssignmentsInput
    box?: BoxCreateNestedOneWithoutMedicineAssignmentsInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentUncheckedCreateWithoutMedicineInput = {
    id?: string
    patientId: string
    boxId?: string | null
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentCreateOrConnectWithoutMedicineInput = {
    where: MedicineAssignmentWhereUniqueInput
    create: XOR<MedicineAssignmentCreateWithoutMedicineInput, MedicineAssignmentUncheckedCreateWithoutMedicineInput>
  }

  export type MedicineAssignmentCreateManyMedicineInputEnvelope = {
    data: MedicineAssignmentCreateManyMedicineInput | MedicineAssignmentCreateManyMedicineInput[]
    skipDuplicates?: boolean
  }

  export type MedicineAssignmentUpsertWithWhereUniqueWithoutMedicineInput = {
    where: MedicineAssignmentWhereUniqueInput
    update: XOR<MedicineAssignmentUpdateWithoutMedicineInput, MedicineAssignmentUncheckedUpdateWithoutMedicineInput>
    create: XOR<MedicineAssignmentCreateWithoutMedicineInput, MedicineAssignmentUncheckedCreateWithoutMedicineInput>
  }

  export type MedicineAssignmentUpdateWithWhereUniqueWithoutMedicineInput = {
    where: MedicineAssignmentWhereUniqueInput
    data: XOR<MedicineAssignmentUpdateWithoutMedicineInput, MedicineAssignmentUncheckedUpdateWithoutMedicineInput>
  }

  export type MedicineAssignmentUpdateManyWithWhereWithoutMedicineInput = {
    where: MedicineAssignmentScalarWhereInput
    data: XOR<MedicineAssignmentUpdateManyMutationInput, MedicineAssignmentUncheckedUpdateManyWithoutMedicineInput>
  }

  export type PatientCreateWithoutBoxInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutPatientsInput
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutPatientInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutBoxInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId?: string | null
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutPatientInput
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutBoxInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutBoxInput, PatientUncheckedCreateWithoutBoxInput>
  }

  export type PatientCreateManyBoxInputEnvelope = {
    data: PatientCreateManyBoxInput | PatientCreateManyBoxInput[]
    skipDuplicates?: boolean
  }

  export type MedicineAssignmentCreateWithoutBoxInput = {
    id?: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicineAssignmentsInput
    medicine: MedicineCreateNestedOneWithoutMedicineAssignmentsInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentUncheckedCreateWithoutBoxInput = {
    id?: string
    patientId: string
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type MedicineAssignmentCreateOrConnectWithoutBoxInput = {
    where: MedicineAssignmentWhereUniqueInput
    create: XOR<MedicineAssignmentCreateWithoutBoxInput, MedicineAssignmentUncheckedCreateWithoutBoxInput>
  }

  export type MedicineAssignmentCreateManyBoxInputEnvelope = {
    data: MedicineAssignmentCreateManyBoxInput | MedicineAssignmentCreateManyBoxInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithWhereUniqueWithoutBoxInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutBoxInput, PatientUncheckedUpdateWithoutBoxInput>
    create: XOR<PatientCreateWithoutBoxInput, PatientUncheckedCreateWithoutBoxInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutBoxInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutBoxInput, PatientUncheckedUpdateWithoutBoxInput>
  }

  export type PatientUpdateManyWithWhereWithoutBoxInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutBoxInput>
  }

  export type MedicineAssignmentUpsertWithWhereUniqueWithoutBoxInput = {
    where: MedicineAssignmentWhereUniqueInput
    update: XOR<MedicineAssignmentUpdateWithoutBoxInput, MedicineAssignmentUncheckedUpdateWithoutBoxInput>
    create: XOR<MedicineAssignmentCreateWithoutBoxInput, MedicineAssignmentUncheckedCreateWithoutBoxInput>
  }

  export type MedicineAssignmentUpdateWithWhereUniqueWithoutBoxInput = {
    where: MedicineAssignmentWhereUniqueInput
    data: XOR<MedicineAssignmentUpdateWithoutBoxInput, MedicineAssignmentUncheckedUpdateWithoutBoxInput>
  }

  export type MedicineAssignmentUpdateManyWithWhereWithoutBoxInput = {
    where: MedicineAssignmentScalarWhereInput
    data: XOR<MedicineAssignmentUpdateManyMutationInput, MedicineAssignmentUncheckedUpdateManyWithoutBoxInput>
  }

  export type PatientCreateWithoutMedicineAssignmentsInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutPatientsInput
    box?: BoxCreateNestedOneWithoutPatientsInput
    administrationLogs?: AdministrationLogCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutMedicineAssignmentsInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId?: string | null
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    boxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    administrationLogs?: AdministrationLogUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutMedicineAssignmentsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutMedicineAssignmentsInput, PatientUncheckedCreateWithoutMedicineAssignmentsInput>
  }

  export type BoxCreateWithoutMedicineAssignmentsInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutBoxInput
  }

  export type BoxUncheckedCreateWithoutMedicineAssignmentsInput = {
    id?: string
    boxLabel: string
    location?: string | null
    status: $Enums.BoxStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutBoxInput
  }

  export type BoxCreateOrConnectWithoutMedicineAssignmentsInput = {
    where: BoxWhereUniqueInput
    create: XOR<BoxCreateWithoutMedicineAssignmentsInput, BoxUncheckedCreateWithoutMedicineAssignmentsInput>
  }

  export type MedicineCreateWithoutMedicineAssignmentsInput = {
    id?: string
    name: string
    type: $Enums.MedicineType
    administrationMethod?: string | null
    defaultDosage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineUncheckedCreateWithoutMedicineAssignmentsInput = {
    id?: string
    name: string
    type: $Enums.MedicineType
    administrationMethod?: string | null
    defaultDosage?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineCreateOrConnectWithoutMedicineAssignmentsInput = {
    where: MedicineWhereUniqueInput
    create: XOR<MedicineCreateWithoutMedicineAssignmentsInput, MedicineUncheckedCreateWithoutMedicineAssignmentsInput>
  }

  export type AdministrationLogCreateWithoutAssignmentInput = {
    id?: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutAdministrationLogsInput
    staff: UserCreateNestedOneWithoutAdministrationLogsInput
  }

  export type AdministrationLogUncheckedCreateWithoutAssignmentInput = {
    id?: string
    patientId: string
    staffId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogCreateOrConnectWithoutAssignmentInput = {
    where: AdministrationLogWhereUniqueInput
    create: XOR<AdministrationLogCreateWithoutAssignmentInput, AdministrationLogUncheckedCreateWithoutAssignmentInput>
  }

  export type AdministrationLogCreateManyAssignmentInputEnvelope = {
    data: AdministrationLogCreateManyAssignmentInput | AdministrationLogCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type PatientUpsertWithoutMedicineAssignmentsInput = {
    update: XOR<PatientUpdateWithoutMedicineAssignmentsInput, PatientUncheckedUpdateWithoutMedicineAssignmentsInput>
    create: XOR<PatientCreateWithoutMedicineAssignmentsInput, PatientUncheckedCreateWithoutMedicineAssignmentsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutMedicineAssignmentsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutMedicineAssignmentsInput, PatientUncheckedUpdateWithoutMedicineAssignmentsInput>
  }

  export type PatientUpdateWithoutMedicineAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutPatientsNestedInput
    box?: BoxUpdateOneWithoutPatientsNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutMedicineAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type BoxUpsertWithoutMedicineAssignmentsInput = {
    update: XOR<BoxUpdateWithoutMedicineAssignmentsInput, BoxUncheckedUpdateWithoutMedicineAssignmentsInput>
    create: XOR<BoxCreateWithoutMedicineAssignmentsInput, BoxUncheckedCreateWithoutMedicineAssignmentsInput>
    where?: BoxWhereInput
  }

  export type BoxUpdateToOneWithWhereWithoutMedicineAssignmentsInput = {
    where?: BoxWhereInput
    data: XOR<BoxUpdateWithoutMedicineAssignmentsInput, BoxUncheckedUpdateWithoutMedicineAssignmentsInput>
  }

  export type BoxUpdateWithoutMedicineAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutBoxNestedInput
  }

  export type BoxUncheckedUpdateWithoutMedicineAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxLabel?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBoxStatusFieldUpdateOperationsInput | $Enums.BoxStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutBoxNestedInput
  }

  export type MedicineUpsertWithoutMedicineAssignmentsInput = {
    update: XOR<MedicineUpdateWithoutMedicineAssignmentsInput, MedicineUncheckedUpdateWithoutMedicineAssignmentsInput>
    create: XOR<MedicineCreateWithoutMedicineAssignmentsInput, MedicineUncheckedCreateWithoutMedicineAssignmentsInput>
    where?: MedicineWhereInput
  }

  export type MedicineUpdateToOneWithWhereWithoutMedicineAssignmentsInput = {
    where?: MedicineWhereInput
    data: XOR<MedicineUpdateWithoutMedicineAssignmentsInput, MedicineUncheckedUpdateWithoutMedicineAssignmentsInput>
  }

  export type MedicineUpdateWithoutMedicineAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMedicineTypeFieldUpdateOperationsInput | $Enums.MedicineType
    administrationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    defaultDosage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineUncheckedUpdateWithoutMedicineAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumMedicineTypeFieldUpdateOperationsInput | $Enums.MedicineType
    administrationMethod?: NullableStringFieldUpdateOperationsInput | string | null
    defaultDosage?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: AdministrationLogWhereUniqueInput
    update: XOR<AdministrationLogUpdateWithoutAssignmentInput, AdministrationLogUncheckedUpdateWithoutAssignmentInput>
    create: XOR<AdministrationLogCreateWithoutAssignmentInput, AdministrationLogUncheckedCreateWithoutAssignmentInput>
  }

  export type AdministrationLogUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: AdministrationLogWhereUniqueInput
    data: XOR<AdministrationLogUpdateWithoutAssignmentInput, AdministrationLogUncheckedUpdateWithoutAssignmentInput>
  }

  export type AdministrationLogUpdateManyWithWhereWithoutAssignmentInput = {
    where: AdministrationLogScalarWhereInput
    data: XOR<AdministrationLogUpdateManyMutationInput, AdministrationLogUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type MedicineAssignmentCreateWithoutAdministrationLogsInput = {
    id?: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutMedicineAssignmentsInput
    box?: BoxCreateNestedOneWithoutMedicineAssignmentsInput
    medicine: MedicineCreateNestedOneWithoutMedicineAssignmentsInput
  }

  export type MedicineAssignmentUncheckedCreateWithoutAdministrationLogsInput = {
    id?: string
    patientId: string
    boxId?: string | null
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAssignmentCreateOrConnectWithoutAdministrationLogsInput = {
    where: MedicineAssignmentWhereUniqueInput
    create: XOR<MedicineAssignmentCreateWithoutAdministrationLogsInput, MedicineAssignmentUncheckedCreateWithoutAdministrationLogsInput>
  }

  export type PatientCreateWithoutAdministrationLogsInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: DepartmentCreateNestedOneWithoutPatientsInput
    box?: BoxCreateNestedOneWithoutPatientsInput
    medicineAssignments?: MedicineAssignmentCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAdministrationLogsInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId?: string | null
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    boxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicineAssignments?: MedicineAssignmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAdministrationLogsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAdministrationLogsInput, PatientUncheckedCreateWithoutAdministrationLogsInput>
  }

  export type UserCreateWithoutAdministrationLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAdministrationLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAdministrationLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdministrationLogsInput, UserUncheckedCreateWithoutAdministrationLogsInput>
  }

  export type MedicineAssignmentUpsertWithoutAdministrationLogsInput = {
    update: XOR<MedicineAssignmentUpdateWithoutAdministrationLogsInput, MedicineAssignmentUncheckedUpdateWithoutAdministrationLogsInput>
    create: XOR<MedicineAssignmentCreateWithoutAdministrationLogsInput, MedicineAssignmentUncheckedCreateWithoutAdministrationLogsInput>
    where?: MedicineAssignmentWhereInput
  }

  export type MedicineAssignmentUpdateToOneWithWhereWithoutAdministrationLogsInput = {
    where?: MedicineAssignmentWhereInput
    data: XOR<MedicineAssignmentUpdateWithoutAdministrationLogsInput, MedicineAssignmentUncheckedUpdateWithoutAdministrationLogsInput>
  }

  export type MedicineAssignmentUpdateWithoutAdministrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    box?: BoxUpdateOneWithoutMedicineAssignmentsNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateWithoutAdministrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpsertWithoutAdministrationLogsInput = {
    update: XOR<PatientUpdateWithoutAdministrationLogsInput, PatientUncheckedUpdateWithoutAdministrationLogsInput>
    create: XOR<PatientCreateWithoutAdministrationLogsInput, PatientUncheckedCreateWithoutAdministrationLogsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutAdministrationLogsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutAdministrationLogsInput, PatientUncheckedUpdateWithoutAdministrationLogsInput>
  }

  export type PatientUpdateWithoutAdministrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutPatientsNestedInput
    box?: BoxUpdateOneWithoutPatientsNestedInput
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAdministrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserUpsertWithoutAdministrationLogsInput = {
    update: XOR<UserUpdateWithoutAdministrationLogsInput, UserUncheckedUpdateWithoutAdministrationLogsInput>
    create: XOR<UserCreateWithoutAdministrationLogsInput, UserUncheckedCreateWithoutAdministrationLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdministrationLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdministrationLogsInput, UserUncheckedUpdateWithoutAdministrationLogsInput>
  }

  export type UserUpdateWithoutAdministrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAdministrationLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogCreateManyStaffInput = {
    id?: string
    assignmentId: string
    patientId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: MedicineAssignmentUpdateOneRequiredWithoutAdministrationLogsNestedInput
    patient?: PatientUpdateOneRequiredWithoutAdministrationLogsNestedInput
  }

  export type AdministrationLogUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyDepartmentInput = {
    id?: string
    roomNumber: string
    capacity: number
    status: $Enums.RoomStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyDepartmentInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    boxId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomNumber?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    box?: BoxUpdateOneWithoutPatientsNestedInput
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutPatientNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutPatientNestedInput
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAssignmentCreateManyPatientInput = {
    id?: string
    boxId?: string | null
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogCreateManyPatientInput = {
    id?: string
    assignmentId: string
    staffId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAssignmentUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    box?: BoxUpdateOneWithoutMedicineAssignmentsNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: MedicineAssignmentUpdateOneRequiredWithoutAdministrationLogsNestedInput
    staff?: UserUpdateOneRequiredWithoutAdministrationLogsNestedInput
  }

  export type AdministrationLogUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAssignmentCreateManyMedicineInput = {
    id?: string
    patientId: string
    boxId?: string | null
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAssignmentUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    box?: BoxUpdateOneWithoutMedicineAssignmentsNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateManyWithoutMedicineInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    boxId?: NullableStringFieldUpdateOperationsInput | string | null
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateManyBoxInput = {
    id?: string
    name: string
    age: number
    gender: $Enums.Gender
    nationalId: string
    departmentId?: string | null
    room?: string | null
    allergies?: PatientCreateallergiesInput | string[]
    status: $Enums.PatientStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicineAssignmentCreateManyBoxInput = {
    id?: string
    patientId: string
    medicineId: string
    dosage: string
    administrationMethodOverride?: string | null
    scheduleTimes?: MedicineAssignmentCreatescheduleTimesInput | string[]
    startDate: Date | string
    durationDays: number
    endDate: Date | string
    repeat: boolean
    status: $Enums.AssignmentStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutPatientsNestedInput
    medicineAssignments?: MedicineAssignmentUpdateManyWithoutPatientNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicineAssignments?: MedicineAssignmentUncheckedUpdateManyWithoutPatientNestedInput
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    nationalId?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    room?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: PatientUpdateallergiesInput | string[]
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicineAssignmentUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    medicine?: MedicineUpdateOneRequiredWithoutMedicineAssignmentsNestedInput
    administrationLogs?: AdministrationLogUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrationLogs?: AdministrationLogUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type MedicineAssignmentUncheckedUpdateManyWithoutBoxInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    medicineId?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    administrationMethodOverride?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleTimes?: MedicineAssignmentUpdatescheduleTimesInput | string[]
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    durationDays?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    repeat?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogCreateManyAssignmentInput = {
    id?: string
    patientId: string
    staffId: string
    scheduledTime: Date | string
    administeredAt?: Date | string | null
    status: $Enums.AdministrationStatus
    skipReason?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrationLogUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutAdministrationLogsNestedInput
    staff?: UserUpdateOneRequiredWithoutAdministrationLogsNestedInput
  }

  export type AdministrationLogUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrationLogUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    scheduledTime?: DateTimeFieldUpdateOperationsInput | Date | string
    administeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumAdministrationStatusFieldUpdateOperationsInput | $Enums.AdministrationStatus
    skipReason?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}