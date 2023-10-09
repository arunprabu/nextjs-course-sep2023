import Link from "next/link";

export default function ArchivesIndex() {
  return (
    <div className="flex min-h-screen flex-col ps-2">
      <h1>Welcome to Archived Resources</h1>
      <ul>
        <li>
          <Link href="archives/2023">2023</Link>
          <ul>
            <li>
              <Link href="archives/2023/01">January</Link>
            </li>
            <li>
              <Link href="archives/2023/02">February</Link>
            </li>
          </ul>
          <hr />
        </li>
        <li>
          <Link href="archives/2022">2022</Link>
          <ul>
            <li>
              <Link href="archives/2022/11">November</Link>
            </li>
            <li>
              <Link href="archives/2022/12">December</Link>
            </li>
          </ul>
          <hr />
        </li>
        <li>
          <Link href="archives/2021">2021</Link>
          <ul>
            <li>
              <Link href="archives/2022/05/01">May 1st</Link>
            </li>
            <li>
              <Link href="archives/2022/06/30">Jun 30th</Link>
            </li>
          </ul>
          <hr />
        </li>
      </ul>
    </div>
  );
}
