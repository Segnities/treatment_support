import Header from "@/components/Header";

interface Props {
    children: React.ReactNode
}

export default function DefaultUILayout({children}: Props) {
    return (
      <>
          <Header/>
          {
              children
          }
      </>
    );
}

