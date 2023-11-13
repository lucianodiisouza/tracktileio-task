import { Dispatch, SetStateAction } from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface ISearchProps {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const SearchInput = ({ search, setSearch }: ISearchProps) => {
  return (
    <TextInput
      style={styles.container}
      placeholder="Search across title and description..."
      value={search}
      onChangeText={setSearch}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: '96%',
    height: 50,
    marginHorizontal: 5,
    paddingLeft: 8,
    borderRadius: 10,
    marginBottom: 5,
  },
})
