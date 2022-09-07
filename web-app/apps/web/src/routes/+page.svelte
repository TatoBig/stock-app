<script lang="ts">
  import { getClient, query, mutation } from "svelte-apollo";
  import { GET_TODOS } from "@queries"
  
  const client = getClient();
  const todos = query(client, { query: GET_TODOS });

</script>

<div>
  <div>
    Hello World
  </div>
  <button>
    
  </button>
</div>