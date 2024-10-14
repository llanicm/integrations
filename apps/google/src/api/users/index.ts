import { connector } from "@/lib/connector";

export const config = {
  runtime: 'edge'
}

const handler = async (req: Request, res: Response) => {
  return connector(); 
};

export default handler;