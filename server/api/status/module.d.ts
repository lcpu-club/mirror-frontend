type TupleLike<T, L extends any[]> = TupleLikeInner<T, L>
type TupleLikeInner<
  T,
  Like extends any[],
  Cur extends T[] = []
> = Like['length'] extends Cur['length'] ? Cur : TupleLikeInner<T, Like, [T, ...Cur]>

interface StatusTable<Labels extends string[]> {
  result: {
    labels: Labels
    data: TupleLike<number, Labels>[]
  }
}
