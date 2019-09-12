

export const MuiProvider = function ({ client, options }) {
  this.doFetch = (fetch) => {
    // ? parse the fetch to an operation
    const res = client.fetch(fetch, options)
    // ? some other parsing
  }

  this.doStore = (fetch) => {
    // ? parse the fetch to an operation
    const res = client.store(fetch, options)
    // ? some other parsing
  }
}

function useContent (fetch, schema) {
  // ? fetch is GQL or a promise or an observable
  // ? utilizes client provided to provider
  const res = provider.doFetch(fetch)

  // ? some stuff here

  return {
    loading: false,
    error: null,
    data: res,
    storeContent: (something) => {
      // parse fetch along with schema
      provider.doStore()
    }
  }
}

// ****** Some App Using Mui ****** //

const client = {
  fetch () {},
  store () {},
  isAuthoringMode () {}
}

const provider = new MuiProvider({ client })

const schema = `
  cta {
    bar: Text
    fizz: Radio
  }
`

const SomeComp = ({ something }) => (<>{something}</>)

export const FooComp = props => {
  const { loading, error, data: content, storeContent } =  useContent(`
    cta {
      bar
      fizz
    }
  `, schema)

  return (
    <SomeComp something={content.cta.bar} />
  )
}

export const Root = ({ children }) => {
  <MuiAuthorContainer client={client}>
    {children}
  </MuiAuthorContainer>
}
