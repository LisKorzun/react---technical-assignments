import { getImageUrl } from './utils.js'

function Profile({ imageId, name, awards, imageSize = 70 }) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={imageSize}
                height={imageSize}
            />
            <div>
                <b>Awards: {awards.length} </b>({awards.join(', ')})
            </div>
        </section>
    )
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                imageId="szV5sdG"
                name="Maria Skłodowska-Curie"
                awards={[
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal',
                ]}
            />
            <Profile
                imageId="YfeOqp2"
                name="Katsuko Saruhashi"
                awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
            />
        </div>
    )
}
