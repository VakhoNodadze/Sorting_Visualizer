import React, { FC } from 'react';

import { Body, Article, Aside, Code } from './styled';

interface Arguments {
    title: JSX.Element;
    description: JSX.Element;
    worstCase: JSX.Element;
    avgCase: JSX.Element;
    bestCase: JSX.Element;
    space: JSX.Element;
}

const SortInfo: FC <Arguments> = ({
  title,
  description,
  worstCase,
  avgCase,
  bestCase,
  space
}) => {
  return (
    <div style={{width: '80%', margin: '0 auto', maxWidth: 1200, textAlign: 'left'}}>
      <hr />

      <Body>
        <Article>
          <h1 style={{margin: '1.5rem 0'}}>{title ? title : 'Select Algorithm'}</h1>
          <article>
            {description ? (
              description
            ) : (
              <p>
              You must select an algorithm before you can visualize it's
              execution on an array of numbers.
              </p>
            )}
          </article>
        </Article>

        <Aside>
          <h3 style={{margin: '1rem 0'}}>Performance</h3>
          <table>
            <tbody>
              <tr>
                <td>Worst-case time complexity</td>
                <td>
                  <Code>{worstCase}</Code>
                </td>
              </tr>

              <tr>
                <td>Average time complexity</td>
                <td>
                  <Code>{avgCase}</Code>
                </td>
              </tr>

              <tr>
                <td>Best-case time complexity</td>
                <td>
                  <Code>{bestCase}</Code>
                </td>
              </tr>

              <tr>
                <td>Worst-case space complexity</td>
                <td>
                  <Code>{space}</Code>
                </td>
              </tr>
            </tbody>
          </table>
        </Aside>
      </Body>
    </div>
  );
};

export default SortInfo;
