type NestedNumber = NestedNumber[] | number

const numbers: NestedNumber = [12, 21, 212, [1212, 21211]] || 4

type JSONPrimitive = string | number | boolean | null | bigint
type JSONObject = {
  [k: string]: JSONValue
}
type JSONArray = JSONValue[]
type JSONValue = JSONPrimitive | JSONObject | JSONArray

type Test = number | null
type TestNonNull = NonNullable<Test>

const number: TestNonNull = 5

type NonNullableQuery<T> = {
  [Prop in keyof T]-?: NonNullableQuery<NonNullable<T[Prop]>>
}
