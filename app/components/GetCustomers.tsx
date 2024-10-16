import {sql} from '@vercel/postgres'

export default async function GetCustomers({
    params
  } : {
    params: { user: string }
  }): Promise<JSX.Element> {
    const { rows } = await sql`SELECT * from CUSTOMERS`;
    //const { rows } = await sql`SELECT * from CUSTOMERS where user_id=${params.user}`;
    return (
      <div>
        {rows.map((row) => (
          <div key={row.id}>
            {row.id} - {row.name}
          </div>
        ))}
      </div>
    );
  }